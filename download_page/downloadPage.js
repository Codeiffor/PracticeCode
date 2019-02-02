const http = require("http")
const path = require("path")
const fs = require("fs")
const uuidv1 = require("uuid/v1")

const downloadPage = (url = 'http://nodeprogram.com') => {
    const folderName = uuidv1()
    fs.mkdirSync(folderName)
    const fetchPage = (url ,callback) => {
        http.get(url, (response) => {
            let buff = ''
            response.on('data', (chunk) => {
                buff += chunk
            })
            response.on('end', () => {
                callback(null, buff)
            })
        }).on('error', (error) => {
            console.error(`got error : ${error.message}`)
            callback(error)
        })
    }
    console.log('downloading url ',url)
    fetchPage(url, (error, data) => {
        if(error)
            console.log(error)
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url+'\n')
        fs.writeFileSync(path.join(__dirname, folderName, 'index.html'), data+'\n')
        console.log('downloading complete in folder ', folderName)
    })
}

downloadPage(process.argv[2])