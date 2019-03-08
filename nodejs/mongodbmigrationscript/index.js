const MongoClient = require('mongodb').MongoClient
const parallel = require('async').parallel
const client = new MongoClient('mongodb://localhost:27017')
const customerdata = require('./m3-customer-data.json')
const customeraddress = require('./m3-customer-address-data.json')

client.connect((err) => {
    if(err) process.exit(1)
    const db = client.db('datamigration')
    const collection = db.collection('customerdata')

    const chunksize = parseInt(process.argv[2]) || 100
    const datalength = customerdata.length
    
    let tasks = []
    let data = []
    for(let i = 0; i < datalength; i++){
        let obj = Object.assign(customerdata[i], customeraddress[i])
        data.push(obj)
    }
    for(let i = 0; i < datalength; i += chunksize){
        let chunk = data.slice( i, Math.min(datalength, i+chunksize))
        let asyncfunction = (callback) => {
            collection.insertMany(chunk, (err, result) => {
                callback(err, result)
            })
        }
        tasks.push(asyncfunction)
    }

    parallel(tasks, (err, result) => {
        if(err) console.log(err)
        else console.log(`task completed in ${result.length} parallel queries`)
    })
    client.close()
})