const path = require('path')
const csvtojson = require('csvtojson')
const fs = require('fs')

const convertCsvToJson = (filename = 'customer-data.csv') => {
    let csvFilePath = path.join(__dirname,filename)
    csvtojson().fromFile(csvFilePath)
    .then((jsonObject) => {
        fs.writeFileSync(path.join(__dirname,filename.replace('.csv','.json')),JSON.stringify(jsonObject))
    })
}

convertCsvToJson(process.argv[2])