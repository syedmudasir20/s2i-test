const port = process.env.PORT || 8080;
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Welcome to HPE for OpenShift Class! -Version 1!\n'))

app.get('/readiness', (req, res) => res.send('Ready !!'))

app.get('/liveness', (req, res) => res.send('Live !!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
