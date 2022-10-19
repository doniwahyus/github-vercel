const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.json());
app.use(morgan('dev'))

app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: "coba docker image sendiri"
    })
});

app.listen(port, () => { console.log("listening on port", port) })