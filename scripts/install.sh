#!/bin/bash

cd ..

which yarn --version

if [$? -ne 0]; then
  npm i --global yarn
fi

echo "=== Install packages ==="
yarn install