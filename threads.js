const { Worker } = require('worker_threads');
let loggerWorker = Worker();

if (typeof(Worker) !== "undefined") {
    if (typeof(worker) == "undefined") {
        loggerWorker = new Worker("serviceLogger.js");
        while (true) {
            loggerWorker.postMessage('hello!')
        }
    }
};

