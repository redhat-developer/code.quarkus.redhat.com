#!/bin/bash

set -exv

if [[ $(git --no-pager  log --oneline -1) == *\[skip\ ci\]* ]]; then
  exit 1
fi

cd frontend && ./build_deploy.sh
