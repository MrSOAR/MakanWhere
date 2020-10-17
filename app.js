// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const app = express()
const port = 8000;


// =======================================
//              MONGOOSE
// =======================================


// =======================================
//              EXPRESS SETUP
// =======================================

// =======================================
//              ROUTES
// =======================================
app.get('/', (req, res) => {
    res.status(200).send("Hello from the server side!")
}) //status code is not that necessary. 200 refers to okay.

app.get('/api/v1/tours', (req, res) => {
    
})

// =======================================
//              LISTENER
// =======================================

app.listen(port, () => {
    console.log(`Project 2 app listening on port: ${port}`)
})