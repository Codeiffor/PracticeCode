const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const assert = require('assert')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const client = new MongoClient('mongodb://localhost:27017')
const app = express()

app.use(logger('dev'))
app.use(errorhandler())
app.use(bodyParser.json())

client.connect((err) => {
    assert.equal(null, err)
    const db = client.db('crudrestapi')
    const collection = db.collection('accounts')
     
    app.get('/accounts', (req, res, next) => {
        collection.find({}).toArray((err, accounts) => {
            if(err)return next(err)
            res.send(accounts)
        })
    })
    
    app.post('/accounts', (req, res, next) => {
        collection.insertOne(req.body, (err, result) => {
            if(err)return next(err)
            res.send('\ninserted')
        })
    })

    app.put('/accounts/:id', (req, res, next) => {
        collection.updateOne({_id: ObjectId(req.params.id)}, {$set: req.body}, (err, result) => {
            if(err)return next(err)
            res.send('\nupdated')
        })
    })

    app.delete('/accounts/:id', (req, res, next) => {
        collection.deleteOne({_id: ObjectId(req.params.id)}, (err, result) => {
            if(err)return next(err)
            res.send('\ndeleted')
        })
    })

    app.listen(3000)
})