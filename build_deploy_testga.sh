#!/bin/bash

export IMAGE="code-quarkus"
export IMAGE_TAG="product-ga"
export MAVEN_EXTRA_ARGS="-Dquarkus.version=${QUARKUS_VERSION} -Dquarkus.platform.version=${PLATFORM_VERSION} -Ptest-ga"

cd code.quarkus.io && ./build_deploy.sh