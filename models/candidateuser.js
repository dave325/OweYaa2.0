var mongoose = require('mongoose');
mongoose.connect('mongodb://oweyaa:password1@ds247449.mlab.com:47449/oweyaa');


var CandidateUserSchema = new mongoose.Schema({
  // ex isbn: String,
  email:      String,
  intiated:   { type: Date, default: Date.now },

  about: {
    bio:          String,
    social_media: [String],
    ethnicity:    String,
    age:          Number,
    Gender:       String,
    isVet:        Boolean
  },

  contact_info: {
    phone:      String,
    first:      String,
    last:       String,
    longitude:  Number,
    latitude:   Number,
    address:    String
  },

  military: {
    branch:           String,
    mosc_mosc:        String,
    rank:             String,
    disability:       String,
    discharge_status: Boolean,
    social_benefits:  String,
  },

  achievements: {
    bootcamp:       String,
    certifications: String,
    course:         String,
    skills:         String,
    wanted_skills:  String
  },

  education: {
    highest:             String,
    school:              [String],
    degree:              String,
    currently_attending: Boolean
  },

  career: {
    previous_fields:  [String],
    career_goals:     String,
    last_income:      Number,
    employ_status:    Boolean,
    unemployed:       Boolean,
    events:           String,
    interviews:       String,
    focus_area:       String,
    position:         Number
  },

  Mentor: {
    first:    String,
    last:     String,
    relation: String,
    contact: {
      email: String,
      phone: String
    }
  }
});

module.exports = mongoose.model('CandidateUser',CandidateUserSchema);