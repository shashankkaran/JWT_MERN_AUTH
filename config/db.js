const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        useUnifiedTopology:true,
        // useFindAndModify:true

    });
    console.log("MongoDB connected")
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;