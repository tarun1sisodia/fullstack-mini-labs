# Guide: Access and Refresh Tokens

This guide explains how to generate access and refresh tokens, store the refresh token in the database, and use it for authentication.

## 1. Generating Access and Refresh Tokens

When a user logs in, you need to generate two tokens:

*   **Access Token:** This token is short-lived (e.g., 15 minutes) and is used to authenticate the user for most API requests.
*   **Refresh Token:** This token is long-lived (e.g., 7 days) and is used to generate a new access token when the old one expires.

You can use a library like `jsonwebtoken` to generate these tokens.

### Installation

```bash
npm install jsonwebtoken
```

### Example

```javascript
import jwt from 'jsonwebtoken';

// ... inside your login function after verifying user credentials

const accessToken = jwt.sign(
  { userId: user._id },
  process.env.ACCESS_TOKEN_SECRET,
  { expiresIn: '15m' }
);

const refreshToken = jwt.sign(
  { userId: user._id },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: '7d' }
);
```

## 2. Storing the Refresh Token in the Database

The refresh token needs to be stored in the database so that you can verify it later. You can add a `refreshToken` field to your `User` model.

### `user.model.js`

```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // ... other fields
  refreshToken: {
    type: String,
  },
});

export const User = mongoose.model('User', userSchema);
```

After generating the refresh token, save it to the user's document in the database.

```javascript
// ... inside your login function

user.refreshToken = refreshToken;
await user.save();
```

## 3. Sending Tokens to the Client

After generating the tokens, you need to send them to the client. The access token is typically sent in the response body, while the refresh token is sent as an HTTP-only cookie.

```javascript
// ... inside your login function

res
  .status(200)
  .cookie('refreshToken', refreshToken, { httpOnly: true, secure: true })
  .json({
    accessToken,
    // ... other user data
  });
```

## 4. Using the Access Token

The client should include the access token in the `Authorization` header of every request to a protected route.

```
Authorization: Bearer <access_token>
```

You can create a middleware to verify the access token.

### `auth.middleware.js`

```javascript
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};
```

## 5. Refreshing the Access Token

When the access token expires, the client can use the refresh token to get a new one. The client should make a request to a `/refresh-token` endpoint with the refresh token in the cookie.

### `routes/user.routes.js`

```javascript
// ...
router.post('/refresh-token', refreshToken);
// ...
```

### `controllers/user.controller.js`

```javascript
export const refreshToken = async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken;

  if (!incomingRefreshToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || user.refreshToken !== incomingRefreshToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
```
