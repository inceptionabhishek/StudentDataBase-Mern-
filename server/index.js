import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentroutes from './Routes/student.js';



const app=express();

app.use("/student", studentroutes);

app.use(express.json({limit:"20mb",extended:true}));
app.use(express.urlencoded({ limit: "20mb", extended: true }));


app.use(cors());


const CONNECTION_URL =
  "mongodb+srv://memoriesmern:memoriesmern123@cluster0.i0lsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT=process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> app.listen(PORT,()=> console.log(`connection established at : ${PORT}`)))
.catch((err)=>console.log(err.message));

