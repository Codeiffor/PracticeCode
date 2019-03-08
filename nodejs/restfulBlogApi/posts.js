module.exports = {
    getPosts : (req, res) => {
        res.send(JSON.stringify(posts)+'\n')
    },
    getPost : (req, res) => {
        if(posts[req.params.id])
            return res.send(JSON.stringify(posts[req.params.id])+'\n')
        res.send('post does\'t exist\n')
    },
    addPost : (req, res) => {
        if(!req.body.name || !req.body.url || !req.body.text)
            return res.status(400).send('invalid post\n')
        obj = {
            name : req.body.name,
            url : req.body.url,
            text : req.body.text,
            comments : []
        }
        posts.push(obj)
        res.status(201).send('post created\n')
    },
    updatePost : (req, res) => {
        if(!req.body.name || !req.body.url || !req.body.text)
            return res.status(400).send('invalid post\n')
        obj = {
            name : req.body.name,
            url : req.body.url,
            text : req.body.text,
            comments : posts[req.params.id].comments
        }

        posts[req.params.id] = obj
        res.status(200).send('updated\n')
    },
    deletePost : (req, res) => {
        posts.splice(req.params.id,1)
        res.status(200).send('deleted\n')
    }
}