var EventLogger = require('node-windows').EventLogger;
var logMain = new EventLogger('Astrum-Telegram');
var logThread = new EventLogger('Astrum-Telegram-Logger');
const fs = require('fs')

let writeLogger = fs.createWriteStream(logThread)
writeLogger.write('[Working-From-Thread]')

while (true) {
  logMain.info('[Working]')
  logThread.info('hello')
}