const MongoClient = require("mongodb").MongoClient
const assert = require('assert')
const methods = require("./methods")

const client = new MongoClient('mongodb://localhost:27017')

client.connect((error) => {
    assert.equal(null,error)
    console.log('connected to the server successfuly\n')
    
    const db = client.db('hellomongo')
    methods.insert(db, () => {
        methods.update(db, () => {
            methods.find(db, () => {
                methods.remove(db, () => {
                    client.close()
                })
            })
        })
    })  
})