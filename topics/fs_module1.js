const fs = require ("fs")
const path = require ("path")
emitter = require ("./event_emitter1")

read = (filename) => {
    fs.readFile (path.join (__dirname,filename), {encoding: "utf-8"}, (error, data) => {
        if (error){
            return console.error (error)
        }
        emitter.emit("file read")
        return console.log (data)
    })
}

write = (filename, message) => {
    fs.writeFile (path.join (__dirname, filename), message, (error) => {
        if (error){
            console.error (error)
        }
    })
}

read ("fs_text.txt")

emitter.on ("file read", ()=> {
    write ("fs_text.txt", "this is overwritten in this file using fs.writeFile()")
    emitter.emit("overwritten")
})
emitter.on ("overwritten", ()=> {
    emitter.removeAllListeners()
    read ("fs_text.txt")
})