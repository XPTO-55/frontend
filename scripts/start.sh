#!/bin/bash

cd ..

pm2 --version

if [ $? -ne 0 ]
  then
    npm i --global pm2
  fi

echo "=== Start Application ==="
pm2 start ecosystem.config.js --env production