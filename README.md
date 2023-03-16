# Red Hat Code Quarkus App

This repository contains the frontend for code.quarkus.redhat.com
It is a really basic React app create with `create-react-app` using the community frontend library https://www.npmjs.com/package/@quarkusio/code-quarkus.components.

Start the backend with docker:

```bash
# Using registry.quarkus.redhat.com
make start-api
```

Start the frontend in dev mode:
```bash
make dev-frontend
```

# Link/Unlink local dev library
```bash
make link-library
make unlink-library
```

Start the app (backend and frontend) with docker compose:

```bash
# Using registry.quarkus.redhat.com
make compose
```





