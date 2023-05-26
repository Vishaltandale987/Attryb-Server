const mongoose = require("mongoose");

const OEMSchema = new mongoose.Schema(
  {
    model_name: String,
    year_model: String,
    price: Number,
    colors: String,
    mileage: String,
    Power: String,
    max_speed: String,
    img: String,
  },
  { timestamps: false }
);
module.exports = mongoose.model("OEMModel", OEMSchema);


    // "model_name": "rj",
    // "year_model": "2001",
    // "price": 50000,
    // "colors": "blue",
    // "mileage": "18",
    // "Power": "500cc",
    // "max_speed": "120",
    // "img": "img"