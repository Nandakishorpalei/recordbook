const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.get("/", async(req, res)=>{
    try{
        const users = await User.find().lean().exec();

        res.status(200).send(users);
    }
    catch(e){
        res.status(500).send(e.message)
    }
});


router.post("/", async(req, res)=>{
    try{
        const user = await User.create(req.body);

        res.status(201).send(user)
    }
    catch(e){
        res.status(500).send(e.message)
    }
});

router.get("/students", async(req, res)=>{
    try{
        const students = await User.find({role : "student"}).lean().exec();

        res.status(200).send(students);
    }
    catch(e){
        res.status(500).send(e.message)
    }
});

router.get("/admin", async(req, res)=>{
    try{
        const admins = await User.find({role : "admin"}).lean().exec();

        res.status(200).send(admins);
    }
    catch(e){
        res.status(500).send(e.message)
    }
});

router.get("/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);

        res.status(200).send(user);
    }
    catch(e){
        res.status(500).send(e.message)
    }
});

router.delete("/:id", async(req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).send("user Deleted");
    }
    catch(e){
        res.status(500).send(e.message)
    }
});


router.patch("/:id/:name", async(req, res)=>{
    try{

        console.log(req.body)
        const findUpdater = await User.findOne({name : req.params.name}).lean().exec();

        if(findUpdater?.role == "admin"){
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});

            const students = await User.find({role : "student"}).lean().exec();

            res.status(200).send(students);
        }
        else{
            res.status(400).send("You are unauthorize to update")
        }

    }
    catch(e){
        res.status(500).send(e.message)
    }
});

module.exports = router;