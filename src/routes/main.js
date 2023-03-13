const express=require('express');
const routes=express.Router();
const Detail=require('../models/details');
const Slider = require('../models/Slider');

routes.get('/',async (req,res)=>
{
    const details=await Detail.findOne({_id: "640a355e57c60ec9960d38dd"})
    const slider=await Slider.find();
    console.log(slider);
    res.render("index",{
        details:details,
        slider:slider
    });
})

routes.get('/contact-us',async (req,res)=>
{
    const details=await Detail.findOne({_id: "640a355e57c60ec9960d38dd"})

    res.render("about",{
        details:details 
    });
})


module.exports=routes;