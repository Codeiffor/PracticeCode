const EventEmitter = require("events")
class Emitter extends EventEmitter {}
module.exports = emitter = new Emitter()