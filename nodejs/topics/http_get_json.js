const https = require("https")
const url = "https://jsonplaceholder.typicode.com/users"
https.get(url, (response) => {
    let rawdata = ''
    response.on('data', (chunk) => {
        rawdata+=chunk
    })
    response.on('end', () => {
        try{
            console.log (JSON.parse(rawdata))
        } catch(error) {
            console.log (error.message)
        }
    })
    response.on('error', (error) => {
        console.error(error.message);
    })
}).on('error', (error) => {
    console.error(`https get error encountered\n\t${error.message}`);
})
