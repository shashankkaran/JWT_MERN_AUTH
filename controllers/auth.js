exports.register = (req,res,next) =>{
    res.json({
        message:'register route',
    });
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
    