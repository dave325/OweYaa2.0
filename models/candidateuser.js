var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  // ex isbn: String,
  email:String,

  about: {
    bio:          String,
    social media: {},
    ethnicity:    String,
    age:          Number,
    Gender:       Char,
    isVet:        Boolean
  }

  contact_info: {
    phone:      String,
    first:      String,
    last:       String,
    longitude:  Number,
    latitude:   Number,
    address:    String
  }

  military: {
    branch:           String,
    MOS/MOSC:         String,
    rank:             String,
    disability:       String,
    discharge status: Boolean,
    social benefits:  String,
  }

  achievements: {
    bootcamp:       String,
    certifications: String,
    course:         String,
    skills:         String,
    wanted_skills:  String
  }

  education: {
    highest:    String,
    school:     String,
    degree:     String,
    currently_attending: Boolean
  }

  career{
    previous_fields:  {},
    career_goals:     String,
    last_income:      Number,
    employ_status:    Boolean,
    unemployed:       Boolean,
    events:           String,
    interviews:       String,
    focus_area:       String,
    position:         Number
  }

  Mentor{
    first:    String,
    last:     String,
    relation: String
  }
});
