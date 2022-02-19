const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const UserSchema = new mongoose.Schema({
    username : {
        type:String,
        required:[true,"Please Provide username"]
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        require:[true,"please provide password"],
        minlength :6 ,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
});

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

const User = mongoose.model("User",UserSchema);
module.exports = User;