const User = require('../models/User');

exports.register =async (req,res,next) =>{
    const {username , email , password } = req.body ;
    try {
        const user = await User.create({
            username,email,password
        });
        res.status(201).json({
            success:true,
            user,
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
        });
        
    }
};
exports.login = (req,res,next) =>{
    res.json({
        message:'login route',
    });
};
exports.forgotpassword = (req,res,next) =>{
    res.json({
        message:'Forget pass route',
    });
};
exports.resetpassword = (req,res,next) =>{
    res.json({
        message:'reset route',
    });
};
    