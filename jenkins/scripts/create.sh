#!/usr/bin/env sh

set -x

docker build ./ -t angular-todo
#docker run --rm -u root -p 50000:3000 angular-todo

set +x

