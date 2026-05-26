const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Successfully Connected on port 3000.')
})

app.get('/', (req,res) => {
    res.send("<h1> Welcome to Home page ! </h1>")

})

app.get('/user/:userid/book/:bookid', (req,res) => {
    res.send(req.params.bookid)

})

app.get('/search', (req,res) => {
    const name = req.query.name
     const age = req.query.age

    res.send(`Search results for Name : ${name}, Age:${age}`)

})

