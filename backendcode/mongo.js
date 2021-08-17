const mongoose=require("mongoose");

mongoose.connect('mongodb://pr16866:8529745331@cluster0-shard-00-00.bkcf8.mongodb.net:27017,cluster0-shard-00-01.bkcf8.mongodb.net:27017,cluster0-shard-00-02.bkcf8.mongodb.net:27017/makaut-students-data?ssl=true&replicaSet=atlas-grxf4x-shard-0&authSource=admin&retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connected")).catch((err) => console.log(err));

const schema=new mongoose.Schema({
    name:{
type:String
},
email:{
    type:String
},
branch:{
    type:String
},
image:{
    type:String
},
interested_in:{
    type:String
},
state:{
    type:String
},
city:{
    type:String
},
instagram:{
    type:String
},
fb:{
    type:String
},
github:{
    type:String
},
linkdin:{
    type:String
},
date:{
    type:String,
    default:Date(Date.now()).toString()
},
year:{
    type:String
  
}
});
// const first_year=mongoose.model("first_year",schema);
module.exports=schema;