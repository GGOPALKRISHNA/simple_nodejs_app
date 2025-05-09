const express  =require('express')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const saleRoutes = require('./routes/sales')
const bodyParser = require('body-parser')


dotenv.config()

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log( 'connection sucessfully... ' ))
.catch((err)=> console.log('error in connection... ', err))

app.use('/sales', saleRoutes)


const port = process.env.PORT;
app.listen(port,'0.0.0.0' , ()=>{
    console.log('server is running in port : ', port);
})
