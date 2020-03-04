#!/bin/bash

export IMAGE="quay.io/redhat-developer/code-quarkus"

cp -R .git code.quarkus.io/
cd code.quarkus.io && ./build_deploy.sh
rm -Rf code.quarkus.io/.git