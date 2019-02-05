const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())

const postMethods = require('./posts.js')
const commentMethods = require('./comments.js')

posts = []

app.get('/posts', postMethods.getPosts)
app.get('/posts/:id', postMethods.getPost)
app.post('/posts', postMethods.addPost)
app.put('/posts/:id', postMethods.updatePost)
app.delete('/posts/:id', postMethods.deletePost)

app.get('/posts/:id/comments', commentMethods.getComments)
app.get('/posts/:id/comments/:cid', commentMethods.getComment)
app.post('/posts/:id/comments', commentMethods.addComment)
app.put('/posts/:id/comments/:cid', commentMethods.updateComment)
app.delete('/posts/:id/comments/:cid', commentMethods.deleteComment)

app.listen(3000)