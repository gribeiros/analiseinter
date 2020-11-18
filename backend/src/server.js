const express = require("express");
const routes = require("./routes");
const cors = require("cors");


require('./database');

const app = express();

const port = 8080;

app.use(cors())
app.use(express.json());
app.use(routes);

app.set('json replacer', (k, v) => (v === null ? undefined : v))


app.listen(port, () => {
    console.log('\nhttp://localhost:' + port)
});