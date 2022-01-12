var Service = require('node-windows').Service;

var svc = new Service({
  name:'Telegram Node JS Header',
  description: 'Telegram Node JS Description',
  script: 'C:\\Users\\ComradeSkolopendra\\Desktop\\telegram js\\serviceLogger.js'
});

svc.on('install', function(){
  svc.start();

});

svc.install();

console.log('{Code succes!}')