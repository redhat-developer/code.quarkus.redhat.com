# Red Hat Code Quarkus App

This repository contains the frontend for code.quarkus.redhat.com
It is a really basic React app create with `create-react-app` using the community frontend library https://www.npmjs.com/package/@quarkusio/code-quarkus.components.

Start the backend with docker:

```bash
# Using RHBQ internal registry
make start-internal-api
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
# Using RHBQ internal registry
make compose-internal
```

## Deployment to production

1. Check that everything works as expected on [staging](https://code.quarkus.stage.redhat.com/)
2. (Inside Red Hat private network) Create a PR on this [link](https://gitlab.cee.redhat.com/service/app-interface/-/edit/master/data/services/quarkus/cicd/ci-ext/saas-redhat.yaml) with the commit hash to release in bot `ref: ...` **(there are two `ref` to edit, api & frontend)**
3. Comment with `/lgtm` and wait for CI checks
4. Merging the PR will trigger a deployment to production



