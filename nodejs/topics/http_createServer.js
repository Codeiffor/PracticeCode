const http = require("http")

const port = 5000
http.createServer((request ,response) => {
    console.log('\n')
    console.log(request.headers)
    console.log(request.method)
    console.log(request.statusCode)
    console.log(request.url)
    if (request.method == 'POST'){
        buff = ''
        request.on('data', (chunk) => {
            buff+=chunk
        })
        request.on('end', () => {
            console.log(`body : ${buff}`)
            response.end("\ndata accepted\n")
        })
    }
    else {
        response.end("your get request response")
    }
}).listen(port)