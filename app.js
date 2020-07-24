const express = require("express");
const morgan=require("morgan");
const dotenv=require("dotenv");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.set("view engine","ejs");

let port=process.env.PORT;

//require API's
const resumeRoutes=require("./routes/resumeRoutes");

app.use("/",resumeRoutes);

if(port == null || port == ""){
  port = 3000;
}

app.listen(port, err=>{
    if(err){
        console.log(err);
    } else{
        console.log("Successfully started on port "+port);
    }
});