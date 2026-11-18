# File-backed Express CRUD

A small Node.js and Express exercise that reads and writes a `users` collection in a local JSON file.

## Run locally

```sh
npm ci
npm start
```

Run from the repository root so `db.json` resolves correctly. The server listens on port 8000.

| Method | Route | Operation |
| --- | --- | --- |
| GET | `/` | Read the JSON document |
| POST | `/` | Append a user from the request body |
| PUT | `/:id` | Merge fields into a user |
| DELETE | `/:id` | Remove a user |

See [index.js](index.js). Mutations write the local file. Validation, missing-record handling, concurrent-write protection, authentication, and tests are outside this exercise. Dependencies are currently tracked under `node_modules`; removing those tracked files is a separate repository cleanup.
