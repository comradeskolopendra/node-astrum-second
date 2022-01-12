var EventLogger = require('node-windows').EventLogger;
var log = new EventLogger('Astrum-Telegram');

log.info('[Started]')

while (true) {
  logger_worker.onmessage = function() {
      log.info('[Working]')
  }
}