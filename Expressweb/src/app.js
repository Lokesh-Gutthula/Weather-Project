const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 7000;
// const port = process.env.PORT || 7000;
//  		public static path
const static_path = path.join(__dirname,"../public");
// app.use(express.static("./public")) 
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



// 			routing
app.get("/",(req,res)=>{
	res.render("index");
})

app.get("/about",(req,res)=>{
	res.render("about");
})

app.get("/weather",(req,res)=>{
	res.render("weather");
})

app.get("*",(req,res)=>{
	res.render("404error",{
		errmsg : "Oops! Page Not Found"
	})
})

app.listen(port,()=>{
	console.log(`Server Started on port at ${port}`);
})