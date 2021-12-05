const express = require('express')

const app = express()

app.get('/', function(request, response) {
    response.send('Home')
})

app.get('/about', function(request, response){
    response.send('About')
})

app.get('/users', function(request, response){
    response.send('Get User')
})

app.post('/users', function(request, response){
    response.send('Post User')
})

app.put('/users', function(request, response){
    response.send('Put User')
})

app.delete('/users', function(request, response){
    response.send('Delete User')
})

app.listen(3000, function(){
    console.log('server is okay')
})