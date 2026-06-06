const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Successfully Connected on port 3000.')
})

app.get('/', (req,res) => {
    
    res.jsonp(name: 'bhumi',age:20)
})

app.get('/about', (req,res) => {
    
     res.redirect('/https');
})




