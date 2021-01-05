# Red Hat Code Quarkus App

This repository contains code for code.quarkus.redhat.com. It uses a subtree (like a fork but as a subdir) of https://github.com/quarkusio/code.quarkus.io with some changes added to it.

# Merge latest code.quarkus.io sources

To merge latest master of code.quarkus.io, it will do a `git subtree pull`:
```bash
make merge-with-upstream
```

# Release a new RHBQ path version (major.minor.patch)

> **Releasing minor version may require an update (and some possible adaptation) of the code.quarkus.io subtree.**

## Create a release commit

1. Check that the new Quarkus version is available in the [RH maven repo](https://maven.repository.redhat.com/ga/com/redhat/quarkus/quarkus-universe-bom/)
2. Set the new Quarkus version in the [pom](https://github.com/redhat-developer/code.quarkus.redhat.com/blob/master/code.quarkus.io/pom.xml) `quarkus.version` and `quarkus.platform.version` 
3. Build and test locally: `cd code.quarkus.io && mvn clean install -s maven-settings.xml`
4. Create a commit named: `Release X.Y.Z.Final-redhat-NNNNN`

There is currently no PR check CI: https://github.com/redhat-developer/code.quarkus.redhat.com/issues/14 
There is a CI for master using Jenkins (jobs containing `-redhat`): https://ci.ext.devshift.net/view/quarkus/

## Deployment to production

1. Check that everything works as expected on [staging](https://code.quarkus.stage.redhat.com/)
2. (Inside Red Hat private network) Create a PR on this [link](https://gitlab.cee.redhat.com/service/app-interface/-/edit/master/data/services/quarkus/cicd/ci-ext/saas-redhat.yaml) with the commit hash to release in the `ref: ...` 
3. Comment with `/lgtm` and wait for CI checks
4. Merging the PR will trigger a deployment to production
