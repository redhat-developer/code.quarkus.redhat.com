#!/bin/bash

export IMAGE="quay.io/redhat-developer/code-quarkus"
export MAVEN_BUILD_EXTRA_ARGS="-s maven-settings.xml"
export MAVEN_EXTRA_ARGS="-Dmaven.settings=maven-settings.xml"

cd code.quarkus.io && ./build_deploy.sh