const express=require('express');
const hbs=require('hbs');
const routes=require('../src/routes/main');
const app=express();
const PORT=process.env.PORT || 5556;
const mongoose=require('mongoose');
const Detail=require('./models/details');
const Slider=require('./models/Slider')

app.use('/static',express.static("public"));
app.use('',routes);


//db Connection
const uri='mongodb+srv://Shubham:Shubham%40123@shubham.8mkpyrc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri , {
    useNewUrlParser: true,
}).then(con => {
    // console.log(con.connections); 
    console.log('Database Connected Successfullyy');

    // Slider.create([
    //     {
    //         title: "Recent Buzz...",
    //         subTitle: "Here are the market trends now a days",
    //         imgUrl: "static/images/s1.jpg",
    //         class:"active"
    //     },
    //     {
    //         title: "What is WEB3...",
    //         subTitle: "WEB3 is future..",
    //         imgUrl: "static/images/s2.jpg" ,
    //         class:""    
    //     },
    //     {
    //         title: "All WEB3 services availabel here",
    //         subTitle: "WE are availabel 24*7 ",
    //         imgUrl: "static/images/s3.jpg"
    //         ,class:""
    //     }
    // ]
    // )
    // Detail.create(
    //     {
    //         brandName: "Shubham Software Solutions",
    //         brandIconUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/369971102641645.5f3b60b111f46.jpg"
    //         ,links:[
    //             {
    //                 label:"Home",
    //                 url:'/'
    //             },
    //             {
    //                 label:"Services",
    //                 url:"/services"
    //             },
    //             {
    //                 label:"Contact Us",
    //                 url:"/contact-us"
    //             },
    //             {
    //                 label: "Gallery ",
    //                 url:"/gallery"
    //             }
    //         ]
    //     }
    // )
});


//(templating engine hbs )
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials('views/partials')

app.listen(PORT,()=>
{
    console.log(`Server started at ${PORT} ...`)
})

