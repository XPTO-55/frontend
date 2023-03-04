module.exports = {

  apps: [{
    name: 'cpa',
    script: 'yarn',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      API_URL: 'http://localhost:7000',
      PORT: 3000
    }
  }],
  deploy: {
    production: {
      key: 'vm_dev_frontend.pem',
      user: 'ubuntu',
      host: '52.13.27.29',
      ref: 'origin/main',
      repo: 'git@github.com:XPTO-55/frontend.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes'
    }
  }
}
