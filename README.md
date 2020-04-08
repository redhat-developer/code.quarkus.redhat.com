# Red Hat Code Quarkus App

# Backend dev

Start in watch mode:
```bash
make code.quarkus.io dev-backend
```


# Full Dev (back + front)

Start in watch mode:
```bash
make code.quarkus.io dev
```

Open: http://locahost:3000 (:8080 is the backend)


Then open `./src/main/frontend` with your favorite IDE to edit.

# Merge latest code.quarkus.io

To merge latest master of code.quarkus.io, it will do a `git subtree pull`:
```bash
make merge-with-upstream
```
