const assert = require('assert')
module.exports = {
    insert : (db, callback) => {
        const collection = db.collection('users')
        collection.insertMany([
            {username:'name1'},{username:'name2'},{username:'name3'}
        ], (error, result) => {
            assert.equal(null,error)
            assert.equal(3,result.result.n)
            assert.equal(3,result.ops.length)
            console.log(`${result.result.n} documents inserted`)
            callback()
        })
    },
    update : (db, callback) => {
        const collection = db.collection('users')
        collection.updateMany({username:'name3'}, {$set:{password:'123'}}, (error, result) => {
            assert.equal(null,error)
            console.log(`${result.result.n} documents updated with name "name3"`)
            callback()
        })
    },
    find : (db, callback) => {
        const collection = db.collection('users')
        collection.find({}).toArray((error, docs) => {
            assert.equal(null, error)
            console.log(docs)
            callback()
        })
    },
    remove : (db, callback) => {
        const collection = db.collection('users')
        collection.deleteMany({'username' : 'name2'}, (error, result) => {
            assert.equal(null, error)
            console.log(`${result.result.n} documents deleted`)
            callback()
        })
    }
}