const express = require('express')
const path = require('path')
const app = express()
const router = require('./routes/myRouter')

app.set('views',path.join(__dirname,'views'))
app.set('view engie','ejs')
app.use(router)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.listen(4000,()=>{})