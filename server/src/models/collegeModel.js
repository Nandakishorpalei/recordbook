const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    name: {type: String},
    noOfSeats: {type: Number}
},{
    timestamps : true,
    versionKey : false
})

const College = mongoose.model("college", collegeSchema);

module.exports = College;