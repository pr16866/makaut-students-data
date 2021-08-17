const express = require("express");
const multer = require("multer");
const bodyparser = require("body-parser");
const router = new express.Router();
const mongoose = require("mongoose");
const schema = require("./mongo");
// const first_year=require("./mongo");
const path = require("path");

const cse_first_year = mongoose.model("cse_first_year", schema);
const cse_second_year = mongoose.model("cse_second_year", schema);
const cse_third_year = mongoose.model("cse_third_year", schema);
const cse_fourth_year = mongoose.model("cse_fourth_year", schema);

const it_first_year = mongoose.model("it_first_year", schema);
const it_second_year = mongoose.model("it_second_year", schema);
const it_third_year = mongoose.model("it_third_year", schema);
const it_fourth_year = mongoose.model("it_fourth_year", schema);

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});


// for  rendering home page
router.get("/", (req, res) => {
    res.render("home", { title: "This is home page" });
});

// for  rendering form page
router.get("/form", (req, res) => {
    res.render("form", { title: "This is contact page" });
});
// for rendering cse page
router.get("/cse_1st", async (req,res) => {
    
    let show_data = await cse_first_year.find();
    res.render("students", {show_data:show_data,title: "this is show student", h1: "CSE 1ST YEAR STUDENTS" })

});
router.get("/cse_2nd", async (req,res) => {
    
        let show_data = await cse_second_year.find();
        res.render("students",{ show_data:show_data,title: "this is show student", h1: "CSE 2ND YEAR STUDENTS" })
    
});
router.get("/cse_3rd", async (req,res) => {
    
        let show_data = await cse_third_year.find();
        res.render("students", {show_data:show_data,title: "this is show student", h1: "CSE 3RD YEAR STUDENTS" })
    
});
router.get("/cse_4th", async (req,res) => {
    
        let show_data = await cse_fourth_year.find();
        res.render("students", {show_data:show_data,title: "this is show student", h1: "CSE 4TH YEAR STUDENTS" })
    
});

// for rendering it page
router.get("/it_1st", async (req,res) => {
    
    let show_data = await it_first_year.find();
    res.render("students", {show_data:show_data,title: "this is show student", h1: "IT 1ST YEAR STUDENTS" })

});
router.get("/it_2nd", async (req,res) => {
    
        let show_data = await it_second_year.find();
        res.render("students",{ show_data:show_data,title: "this is show student", h1: "IT 2ND YEAR STUDENTS" })
    
});
router.get("/it_3rd", async (req,res) => {
    
        let show_data = await it_third_year.find();
        res.render("students", {show_data:show_data,title: "this is show student", h1: "IT 3RD YEAR STUDENTS" })
    
});
router.get("/it_4th", async (req,res) => {
    
        let show_data = await it_fourth_year.find();
        res.render("students", {show_data:show_data,title: "this is show student", h1: "IT 4TH YEAR STUDENTS" })
    
});


router.post("/form", async (req, res) => {

    try {

        const data = req.body;
        let upload = multer({ storage: storage }).single("image");
        upload(req, res, async (er) => {
            let data = req.body;
            data.image = req.file.filename;

            if(req.body.year=="1st" && req.body.branch=="cse"){
                const fun1 = await cse_first_year.insertMany([data]);
                res.redirect("/cse_1st");
            }
            else if(req.body.year=="2nd" && req.body.branch=="cse"){
                const fun1 = await cse_second_year.insertMany([data]);
                res.redirect("/cse_2nd");
            }
           else if(req.body.year=="3rd" && req.body.branch=="cse"){
                const fun1 = await cse_third_year.insertMany([data]);
                res.redirect("/cse_3rd");
            }
           else if(req.body.year=="4th" && req.body.branch=="cse"){
                const fun1 = await cse_fourth_year.insertMany([data]);
                res.redirect("/cse_4th");
            }


            else if(req.body.year=="1st" && req.body.branch=="it"){
                const fun1 = await it_first_year.insertMany([data]);
                res.redirect("/it_1st");
            }
            else if(req.body.year=="2nd" && req.body.branch=="it"){
                const fun1 = await it_second_year.insertMany([data]);
                res.redirect("/it_2nd");
            }
           else if(req.body.year=="3rd" && req.body.branch=="it"){
                const fun1 = await it_third_year.insertMany([data]);
                res.redirect("/it_3rd");
            }
           else if(req.body.year=="4th" && req.body.branch=="it"){
                const fun1 = await it_fourth_year.insertMany([data]);
                res.redirect("/it_4th");
            }
           
        });


    } catch (er) {
        console.log(er);
    }

});

const fun1 = async () => {
    const data=await first_year.deleteMany({});
    // const data = await first_year.find();
    // console.log(data);
    console.log("deleted");
}
// fun1();

module.exports = router;



