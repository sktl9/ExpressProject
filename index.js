import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
const DB_URl = 'mongodb+srv://gusakofffs:2frvFmTHHZCX7NXU@cluster0.inqfmut.mongodb.net/?retryWrites=true&w=majority'
import Post from "./Post.js";
const port = 5000;

const app = express();

app.use(fileUpload())
app.use(express.json())
app.use(express.static('static'))
app.use('/api',router)



async function startApp(){
    try{
        await mongoose.connect(DB_URl,{useUnifiedTopology:true, useNewURlParser:true})
        app.listen(port, () => console.log('server started on port' + port));
    }catch(e){
console.log(e)
    }
}

startApp()