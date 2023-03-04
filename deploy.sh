#!/bin/bash
# use the correct node version for below path
PATH="$PATH:/home/ubuntu/.nvm/versions/node/v16.13.2/bin/"
cd ~/frontend
git pull
yarn install
yarn build
pm2 start