module.exports = {
  apps: [{
    name: 'nextjs',
    script: 'yarn',
    args: 'start',
    cwd: '/var/www/myapp/',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      API_URL: 'http://localhost:7000',
      PORT: 80
    }
  }]
}
