#!/bin/bash

function findLatestBuild() {
  shopt -s nocasematch    #Dont care about the character case
  LIST_HTML="$(curl -s "http://rcm-guest.app.eng.bos.redhat.com/rcm-guest/staging/quarkus/?C=M;O=D")"
  REGEX='(<a\ +href=\"quarkus-)([^\"]+)(\">)'
  [[ $LIST_HTML =~ $REGEX ]] && echo "quarkus-${BASH_REMATCH[2]}"
}

function findLatestQuarkusVersion() {
  QUARKUS_VERSION="$(findLatestBuild)"
  LIST_HTML="$(curl -s "http://rcm-guest.app.eng.bos.redhat.com/rcm-guest/staging/quarkus/$QUARKUS_VERSION/extras/repository-artifact-list.txt")"
  REGEX="($1):([^:]+):([a-zA-Z0-9.-]+)"
  [[ $LIST_HTML =~ $REGEX ]] && echo "${BASH_REMATCH[3]}"
}

QUARKUS_VERSION="$(findLatestQuarkusVersion "io.quarkus")"
PLATFORM_VERSION="$(findLatestQuarkusVersion "com.redhat.quarkus")"
echo "Quarkus version: $QUARKUS_VERSION"
echo "Platform version: $PLATFORM_VERSION"

GIT_REV=$(git rev-parse --short=7 HEAD)
export IMAGE="quay.io/app-sre/code-quarkus-int-build"

export MAVEN_EXTRA_ARGS=" -Dquarkus.version=${QUARKUS_VERSION-1.3.1.Final-redhat-00008} -Dquarkus.platform.version=${PLATFORM_VERSION-1.3.1.Final-redhat-00008} -Pinternal-build -s maven-settings.xml"
export NATIVE_BUILD_MEMORY="3g"

cd code.quarkus.io && ./build_deploy.sh
