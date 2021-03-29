#!/bin/bash

BUILD_VERSION="$(cat internal-build-version.txt)"
echo "Build version: $BUILD_VERSION"
[[ -z "$BUILD_VERSION" ]] && { echo "BUILD_VERSION is empty" ; exit 1; }

function findLatestQuarkusVersion() {
  LIST_HTML="$(curl -s "http://rcm-guest.app.eng.bos.redhat.com/rcm-guest/staging/quarkus/$1/extras/repository-artifact-list.txt")"
  REGEX="($2):([^:]+):([a-zA-Z0-9.-]+)"
  [[ $LIST_HTML =~ $REGEX ]] && echo "${BASH_REMATCH[3]}"
}

QUARKUS_VERSION="$(findLatestQuarkusVersion $BUILD_VERSION "io.quarkus")"
PLATFORM_VERSION="$(findLatestQuarkusVersion $BUILD_VERSION "com.redhat.quarkus")"
echo "Quarkus version: $QUARKUS_VERSION"
echo "Platform version: $PLATFORM_VERSION"

GIT_REV=$(git rev-parse --short=7 HEAD)
export IMAGE="quay.io/app-sre/code-quarkus-int-build"

export MAVEN_BUILD_EXTRA_ARGS=" -Dno-app-running-test=true -Dquarkus.version=${QUARKUS_VERSION} -Dquarkus.platform.version=${PLATFORM_VERSION} -Pinternal-build -s maven-settings.xml"
export MAVEN_EXTRA_ARGS="-Dmaven.settings=maven-settings.xml -Dinternal-build=true"
export NATIVE_BUILD_MEMORY="3g"

cd code.quarkus.io && ./build_deploy.sh