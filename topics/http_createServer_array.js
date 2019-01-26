const http = require('http')
const port = 5000
let data = {
    'username' : "codeiffor",
    'url' : "https://github.com/codeiffor",
    'repositories' : 22,
    'stars' : 9,
    'languages' : ['c++' ,'python', 'javascript']
}
http.createServer( (request,response) => {
    console.log('\n')
    console.log(request.headers)
    console.log(request.method)
    console.log(request.url)
    req=''
    if(request.method == 'POST'){
        request.on('data', (chunk) => {
            req+=chunk
        })
        request.on('end', () => {
            console.log(`\nrequested data : ${req}`)
            if(request.url == '/user'){
                response.end(`\n${req} = ${data[req]}\n`)
            }
            else{
                response.end('\nNothing Here\n')
            }
        })
    }
    else{
        response.end('\nnot a valid request\n');
    }
}).listen(5000)