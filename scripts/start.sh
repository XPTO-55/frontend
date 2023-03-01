#!/bin/bash

cd ..

npm i --global pm2

echo "=== Start Application ==="
pm2 start ecosystem.config.js --env production