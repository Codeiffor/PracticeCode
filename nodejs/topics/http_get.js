const http = require("http")
const url = "http://nodeprogram.com"
http.get(url, (response) => {
    let count = 0
    response.on('data', (chunk) => {
        count++
        console.log(chunk.toString('utf-8'))
    })
    response.on('end', () => {
        console.log(`${count} chunks`);   
    })
}).on('error', (error) => {
    console.error(`error encountered\n\t${error.message}`);
})
