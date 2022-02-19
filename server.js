require("dotenv").config({path:"./config.env"});
const express = require("express");
const connectDB = require('./config/db');
//connect DB
connectDB();
const app = express();

//exprss.json => Ek middleware piece hai jiski madad req.body mil pata hai
app.use(express.json());

//Agar koi /api/auth/<rout name>  pr jayega to ./routes/auth file run hoga or route name wala request bhejega 
app.use('/api/auth',require('./routes/auth'));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,()=>console.log(   `server running on ${PORT}`));
process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged error ${err}`);
    server.close(()=> process.exit(1));
})