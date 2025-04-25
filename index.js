const express  =require('express')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const morgan = require('morgan')
const saleRoutes = require('./routes/sales')
const bodyParser = require('body-parser')


dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log( 'connection sucessfully... ' ))
.catch((err)=> console.log('error in connection... ', err))

app.use('/sales', saleRoutes)


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('server is running in port : ', port);
})