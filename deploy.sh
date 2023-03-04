#!bin/bash
docker compose -f docker/docker-compose.yaml build nextjs
pm2 restart ecosystem.config.js --env production