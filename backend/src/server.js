const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require('./database');

const app = express();

const port = 8080;

app.use(express.json());
app.use(routes);
app.use(cors)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})

app.listen(port, () => {
    console.log('http://localhost:' + port)
});