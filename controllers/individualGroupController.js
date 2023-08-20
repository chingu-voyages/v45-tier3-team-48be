const groups = require('../models/groups');
const userGroups = require('../models/userGroups');

const createGroup = async (req,res) => {
    //get "groupName" and "userId" from request
    var groupName = req.body.groupName;
    var patientName = req.body.patientName;
    var description = req.body.groupName;
    try {
        const newGroup = await groups.create({
            nameGroup : groupName,
            nameCaregiver : 'Placeholder', //replace with user's name
            namePatient : patientName,
            description : description
        });

        const newMember = await userGroups.create({
            user_id : "testID", //testing value + remember to change the model
            group_id : newGroup._id,
            role : "Caretaker" //could be taken from req depending on the user schema
        });

        //res.send('Created new group');
    } catch(err) {
        console.error(err);
    }
}

const getIndividualGroup = async (req,res) => {
    res.send('Hello Individual Group ')
}

/*
module.exports = {
    getIndividualGroup: async (req,res) => {
        res.send('Hello Individual Group ')
    }
}
*/

module.exports = { createGroup, getIndividualGroup };