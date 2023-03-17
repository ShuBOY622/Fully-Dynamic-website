const mongoose=require('mongoose');

const Query=mongoose.Schema(
    {
        email: String,
        number: Number,
        comment: String,
    }
)

module.exports=mongoose.model("contact",Query);