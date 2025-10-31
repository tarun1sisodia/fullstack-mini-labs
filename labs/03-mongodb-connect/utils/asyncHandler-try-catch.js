const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    // Send the error to the next error-handling middleware
    next(error);
  }
};

export { asyncHandler };

/*
How to use it (it's the same as the other asyncHandler):

import { asyncHandler } from './asyncHandler-try-catch.js';

router.route("/users").get(asyncHandler(async (req, res) => {
    // Your logic here
    const users = await User.find();
    res.json(users);
    // No need for a try-catch block!
}));
*/
