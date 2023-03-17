const express = require('express');
const routes = express.Router();
const Detail = require('../models/details');
const Slider = require('../models/Slider');
const Cards = require("../models/Cards")
const bodyParser = require('body-parser')
const contact = require('../models/contact')



routes.get('/', async (req, res) => {
    const details = await Detail.findOne({ _id: "640a355e57c60ec9960d38dd" })
    const slider = await Slider.find();
    const cards = await Cards.find();

    res.render("index", {
        details: details,
        slider: slider,
        cards: cards
    });
})

routes.get('/contact-us', async (req, res) => {
    const details = await Detail.findOne({ _id: "640a355e57c60ec9960d38dd" })

    res.render("about", {
        details: details
    });
})

routes.post("/process-contact-form", async (req, res) => {
    try {
        console.log("Data fetched...")
        console.log(req.body)
        const query = await contact.create(req.body)
    } catch (e) {
        console.log(e)
    }


    res.redirect('/')
})


module.exports = routes;