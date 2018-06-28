var mongoose = require('mongoose');
mongoose.connect('mongodb://oweyaa:password1@ds247449.mlab.com:47449/oweyaa');

var CompanySchema = new mongoose.Schema({
    
    email:String,
    initiated: Date,

    company_info: {
        diversity:String,
        number_of_employees:Number,
        description:String,
        departments: [String],
        revenue:Number,
        website:String
    },

    contact_info:{
        first_name:String,
        last_name:String,
        phone_number:String,
        address:String,
        lat:Number,
        lng:Number
    },

    company_project:{
        //In-Progress
        job_info:{
            title:String,
            description:String
        },
        candidates:[String],
        //In-Progress
        manager_info:{
            first_name:String,
            last_name:String,
            email:String,
            phone_number:String
        },
        milestones:[String]
    }

});

module.exports = mongoose.model('Company',CompanySchema);