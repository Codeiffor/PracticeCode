const path = require('path')
const csvtojson = require('csvtojson')
const fs = require('fs')

const convertCsvToJson = (filename = 'customer-data.csv') => {
    let csvFilePath = path.join(__dirname,filename)
    csvtojson()
    .fromFile(csvFilePath)
    .on('error', (error) => {
        console.log('error found : \n',error)
    })
    .then((jsonObject) => {
        fs.writeFileSync(path.join(__dirname,filename.replace('.csv','.json')),JSON.stringify(jsonObject))
        console.log(`csv converted to json and saved on file "${filename.replace('.csv','.json')}"`)
    })
}

convertCsvToJson(process.argv[2])