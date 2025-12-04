#!/bin/bash

set -exv

GIT_REV=$(git rev-parse HEAD)
GIT_REV_SHORT=$(git rev-parse --short=7 HEAD)
IMAGE=${IMAGE-"quay.io/redhat-developer/code-quarkus"}
IMAGE_TAG=${IMAGE_TAG-$GIT_REV_SHORT}

STAGE=false

if git --no-pager log -1 --format='%h %s' | grep -Fq '[STAGE]'; then
  echo "This commit is flagged with [STAGE] and won't go to production"
  STAGE=true
fi

docker build --compress -f docker/Dockerfile.redhat-app.multistage --build-arg MAVEN_BUILD_EXTRA_ARGS="-Dgit.commit.id=$GIT_REV -Dio.quarkus.code.build.stage=$STAGE" -t "${IMAGE}:${IMAGE_TAG}" .

if [[ -n "$QUAY_USER" && -n "$QUAY_TOKEN" ]]; then
    DOCKER_CONF="$PWD/.docker"
    mkdir -p "$DOCKER_CONF"
    docker tag "${IMAGE}:${IMAGE_TAG}" "${IMAGE}:latest"
    echo "$QUAY_TOKEN" | docker --config="$DOCKER_CONF" login -u="$QUAY_USER" --password-stdin quay.io
    docker --config="$DOCKER_CONF" push "${IMAGE}:${IMAGE_TAG}"
    docker --config="$DOCKER_CONF" push "${IMAGE}:latest"
fi

