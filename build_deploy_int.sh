#!/bin/bash

export IMAGE="quay.io/redhat-developer/code-quarkus-int-build"
export MAVEN_EXTRA_ARGS=" -Dquarkus.platform.group-id=com.redhat.quarkus -Dquarkus.version=${QUARKUS_VERSION-1.3.1.Final-redhat-00008} -Dquarkus.platform.version=${PLATFORM_VERSION-1.3.1.Final-redhat-00008} -Ptest-ga -s maven-settings.xml"

cd code.quarkus.io && ./build_deploy.sh