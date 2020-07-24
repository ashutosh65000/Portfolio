const router=require("express").Router();
// const ejs = require("ejs");

router.get("/resume", (req,res)=>{
    try{
        res.render("resume");
    } catch(err){
        res.render("error404");
    }
});

router.get("/",(req,res)=>{
    res.render("error");
});

router.get("/:anything",(req,res)=>{
    res.render("error");
});

module.exports=router;