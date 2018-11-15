#!/usr/bin/env sh

set -x

docker build ./ -t angular-todo
docker --rm -d -u root -p 50000:3000 angular-todo

set +x

