## ⚙️ Lab 1: Hello Server — The Foundation

### System Behavior

When the server starts:
- It binds to a specific port (e.g., `3000`) and begins listening for incoming HTTP connections.
- A single route `/` is registered to respond to `GET` requests.

When a client visits `http://localhost:3000`:
- The server matches the request path (`/`) and method (`GET`).
- It executes the associated handler function.
- The handler sends back a plain text response: `"Hello World!"`.
- The connection is closed after the response is sent.

### Key Concepts

- **Routing**: Mapping URLs to functions.
- **Request-Response Cycle**: Client asks → Server answers → Connection ends.
- **Stateless Protocol**: Each request is independent; no memory of previous interactions.

---
