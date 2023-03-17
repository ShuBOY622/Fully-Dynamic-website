const mongoose=require('mongoose')

const Cards=mongoose.Schema(

    {
        cardTitle:String,
        cardText:String,
        button1:String,
        button2:String

    }

)

module.exports=mongoose.model('cards',Cards);