const  users = require('../models/userModel')

module.exports = {
    createUser: async (req, res) => {
            try {
                console.log('Database running');
                const reponse = await users.create({
                    fullName: req.body.fullName,
                    phoneNumber: req.body.phoneNumber,
                    email: req.body.email,
                    password: req.body.password
                });
                console.log('User info has been added to the database!');
            } catch (err) {
                console.error(err);
            }
        }
        
}