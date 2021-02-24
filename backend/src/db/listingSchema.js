const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: String,
    required: true
  },
  phone: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: String,
    required: false
  },
  email: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: String,
    required: true
  },
  rentPerMonth: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  pets: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: Boolean,
    required: true
  },
  furnished: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: Boolean,
    required: true
  },
  startDate: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: Date,
    required: true
  },
  endDate: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: Date,
    required: true
  },
  comments: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: String,
    required: false
  },
  listingImage: {
    //required is if the field is needed (like additional comments isnt) and i can add extra stuff like messages if there's a field that is empty
    type: String,
    required: true
  },
  userID: {
    type: mongoose.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model("listing", listingSchema); //so we can use it elsewhere
