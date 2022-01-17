const fs = require('fs');
const path = require('path')
var EventLogger = require('node-windows').EventLogger;
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')

let logThread = new EventLogger('Astrum-Telegram')

fs.readFile(path.join(__dirname, '/package.json'), (err, content) => {
  setInterval(() => {
    if (err) {
      logThread.warn(err)
    }

    logThread.info('[Logger]')
  }, 1000)
})

fs.readFile(path.join(__dirname, '/package.json'), (err, content) => {
  if (err) {
    logThread.warn(err)
  }

  setInterval(() => {
    sqlite.open({
      filename: 'main.db',
      driver: sqlite3.Database
    }).then((db) => {
      db.get('SELECT number FROM users WHERE type = ?', '0').then((response) => {
          logThread.info(response.number)
      }
    )
  })
  }, 20000)
})