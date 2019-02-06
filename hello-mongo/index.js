const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/hellomongo.db'

mongoClient.connect(url, (error, db) => {
    if(error) return process.exit(1)
    console.log('connected to the server successfully\n')
    db.close()    
})