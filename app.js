const express=require("express");
const router=require("./backendcode/router");

const path=require("path");

const port=process.env.PORT||80;
const app=express();


app.set("view engine","pug");
app.set("views",path.join(__dirname,"./frontendcode/views"));

let frontendcode=path.join(__dirname,"./frontendcode");
let images=path.join(__dirname,"./frontendcode/images");
let upload =path.join(__dirname,"./upload");

app.use(express.static(upload));
app.use(express.static(frontendcode));
app.use(express.static(images));
app.use(router);

app.listen(port,()=>{
    console.log(`Your server is listen at port ${port}`);
})