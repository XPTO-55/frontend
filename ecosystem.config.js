module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'vm_dev_frontend.pem',
      user : 'ubuntu',
      host : '52.13.27.29',
      ref  : 'origin/main',
      repo : 'git@github.com:XPTO-55/frontend.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
