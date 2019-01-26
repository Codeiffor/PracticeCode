const http = require("http")

var options = {
    method : "POST",
    hostname : "mockbin.com",
    path : "/request?user=username"
}

res=''
const req = http.request (options, (response) => {
    response.on('data', (chunk)=> {
        res+=chunk
    })
    response.on('end', () => {
        console.log(res)
    })
})

req.on('error', (error) => {
    console.error("error : ",error.message)
})

req.write( JSON.stringify( { foo : "bar"} ))
req.end()