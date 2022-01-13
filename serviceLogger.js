const fs = require('fs');
const path = require('path')

var EventLogger = require('node-windows').EventLogger;
var logMain = new EventLogger('Astrum-Telegram')
let logThread = new EventLogger('Astrum-Telegram-Thread')

setInterval(() => {
  fs.readFile(path.join(__dirname, '/package.json'), (err, content) => {
    if (err) {
      logMain.warn(err)
    }

    logMain.info(content.toString())
  })
}, 500)