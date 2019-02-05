module.exports = {
    getComments : (req, res) => {
        if(posts[req.params.id])
            return res.send(JSON.stringify(posts[req.params.id].comments)+'\n')
        res.send('post does\'t exist\n')
    },
    getComment : (req, res) => {
        if(posts[req.params.id])
            if(posts[req.params.id].comments[req.params.cid])
                return res.send(JSON.stringify(posts[req.params.id].comments[req.params.cid])+'\n')
            res.send('comment does\'t exist\n')
        res.send('post does\'t exist\n')
    },
    addComment : (req, res) => {
        if(!req.body.text)
            return res.status(400).send('invalid comment\n')
        obj = {
            text : req.body.text
        }
        posts[req.params.id].comments.push(obj)
        res.status(201).send('comment created\n')
    },
    updateComment : (req, res) => {
        if(!req.body.text)
            return res.status(400).send('invalid comment\n')
        obj = {
            text : req.body.text,
        }

        posts[req.params.id].comments[req.params.cid] = obj
        res.status(200).send('updated\n')
    },
    deleteComment : (req, res) => {
        posts[req.params.id].comments.splice(req.params.cid,1)
        res.status(200).send('deleted\n')
    }
}