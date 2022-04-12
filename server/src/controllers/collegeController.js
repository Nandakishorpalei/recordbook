const express = require("express");
const router = express.Router();

const College = require("../models/collegeModel");

router.get("/", async(req, res)=>{
    try{
        const colleges = await College.find().lean().exec();

        res.status(200).send(colleges);
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

router.post("/",async(req, res)=>{
    try{
        const college = await College.create(req.body);

        res.status(201).send(college);
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

router.get("/:id",async(req, res)=>{
    try{
        const college = await College.findById(req.params.id)

        res.status(201).send(college);
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req, res)=>{
    try{
        const college = await College.findByIdAndDelete(req.params.id)

        res.status(201).send("College deleted");
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

router.patch("/:id",async(req, res)=>{
    try{
        const college = await College.findByIdAndUpdate(req.params.id, req.body, {new : true})

        res.status(201).send(college);
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

module.exports = router;