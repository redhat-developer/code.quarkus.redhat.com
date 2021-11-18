#!/bin/bash

set -exv

if [[ $(git --no-pager  log --oneline -1) == *Bump* ]]; then
  exit 1
fi

cd frontend && ./buildx@_deploy.sh