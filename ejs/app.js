const express = require("express");
const moment = require("moment");
const bodyParser = require('body-parser');
const PORT = 8000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

let newItems = [];
app.get("/" ,(req, res) =>{
    let date = moment();
    let formatDate = date.format('dddd, D MMMM YYYY');
    res.render("todo", { formatDate, newListItems : newItems });
})

app.post("/", (req,res) =>{
    let newItem = req.body.data;
    newItems.push(newItem);
    res.redirect('/');
})

app.listen(PORT, () =>{
    console.log(`server is running in ${PORT}`);
})