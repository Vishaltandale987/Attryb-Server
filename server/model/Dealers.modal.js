const mongoose = require("mongoose");

const DealersSchema = new mongoose.Schema(
  {
    model_name: String,
    year_model: String,
    original_paint: String,
    img: String,
    km_run:  String,
    major_scratches: String,
    number_of_accidents_reported: String,
    number_of_previous_buyers:  String,
    registration_place:  String,
    postTime:String,
    description:String,
    dealer_Id:String
  },
  { timestamps: false }
);
module.exports = mongoose.model("DealersModel", DealersSchema);


//   "model_name":"TaTa nexson",
// "year_model":"2023",
// "original_paint":"Black",
// "img":"img",
// "km_run":2000,
// "major_scratches":3,
// "number_of_accidents_reported":0,
// "number_of_previous_buyers":0,
// "registration_place":"pune"