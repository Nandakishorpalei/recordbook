const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: {type : String, required : true, enum : ["student", "admin"], default : "student"},
    rank : {type: Number, required: true, default : 0},
    name : {type : String, required: true},
    preference1 : {type : String},
    preference2 : {type : String},
    preference3 : {type : String},
},{
    timestamps: true,
    versionKey: false
})

const User = mongoose.model("user", userSchema);

module.exports = User;