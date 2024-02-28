const mongoose=require("mongoose")

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mydb").then(()=>{
    console.log("Successfully connected to the database");

}).catch(err=>{
    console.error("Error connecting to the database",err)
    process.exit();
})