const User = require('../models/User');

exports.getDashboardPage = async(req, res) =>{
    if(!req.session.userId){
        return res.redirect('/auth/login')
    }

    const user = await User.findById(req.session.userId);

    res.render('dashboard', { user });
}