const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
    return res.send("this is home")
});

app.get("/contact", (req, res) => {
    return res.send("this is our contact page")
});

app.get("/request", (req, res) => {
    return res.send("this is your name " + req.query.name)
});

app.listen(port, () => {console.log(`server is running in ${port}`)})