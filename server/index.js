import expresss from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';



dotenv.config();
import postRoutes from './routes/posts.js';
const app = expresss();



app.use(bodyParser.json({limit:"30 mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30 mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

app.get('/',(req,res)=>{
    res.send("Hello");

   //res.sendFile(__dirname + "/index.html" );
})
const URL_C = process.env.CONNECTION_URL;
console.log(URL_C);
const PORT = process.env.PORT || 5000 ;


mongoose.connect(URL_C,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(PORT,()=>console.log('Server Running on port: ' +PORT)))
    .catch((error)=>console.log(error.message));

// Me quede en el minuto 42:01