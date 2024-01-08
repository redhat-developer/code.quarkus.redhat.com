# Red Hat Code Quarkus App

[![Tests](https://github.com/redhat-developer/code.quarkus.redhat.com/actions/workflows/build.actions.yml/badge.svg)](https://github.com/redhat-developer/code.quarkus.redhat.com/actions/workflows/build.actions.yml)


# Development

Api is located in `src/main/java`
UI is located in `src/main/resources/web/`

Use this command to start dev mode on: http://0.0.0.0:8080 (Api and UI).
```
(BOOTSTRAP_MAVEN_REPOS=redhat-ga BOOTSTRAP_MAVEN_REPO_REDHAT_GA_URL=https://maven.repository.redhat.com/ga quarkus dev)
```

Build the library locally:
```
quarkus build
```

After building, use this command to start the app in production mode:
```
(BOOTSTRAP_MAVEN_REPOS=redhat-ga BOOTSTRAP_MAVEN_REPO_REDHAT_GA_URL=https://maven.repository.redhat.com/ga java -jar community-app/target/quarkus-app/quarkus-run.jar)
```


