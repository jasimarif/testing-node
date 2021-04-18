const express = require('express')
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express()
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(8000, ()=>{
    console.log("app is listening at port 8000")
})