// CORS error - Cross origin resource sharing. In this it does not allow sharing from a diff origin or IP or even different port. To solve this we have to whitelist that IP or url or we have to add proxy in our app which we did.

import express from 'express'

const app = express();

//We don't want to serve anything on '/' right now
app.get('/', (req, res) => {
    res.send('Server is ready')
})

//get a list of 5 jokes

//std parctice - /api/*
 app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is another joke'
        }
    ]
    res.send(jokes);
 })

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})