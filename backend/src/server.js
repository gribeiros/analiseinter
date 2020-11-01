const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require('./database');

const app = express();

const port = 8080;

app.use(express.json());
app.use(routes);
app.use(cors)

app.listen(port, () => {
    console.log('\nhttp://localhost:' + port)
});