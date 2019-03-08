emitter = require ("./event_emitter1.js")

emitter.on ("ready", () => {
    console.log("job done")
})
emitter.on ("ready", () => {
    console.log("job done again")
})

emitter.emit("ready")
emitter.emit("ready")
emitter.emit("emitterNotObserved")