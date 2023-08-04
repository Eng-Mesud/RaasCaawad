import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';
import  {RoutesUser}  from './routes/user-routes.js';
import { RouteCategry } from './routes/Categry-router.js';
import { RoutesProducts } from './routes/Product-routes.js';
import { fileURLToPath } from 'url';
// import { RoutesProducts } from './routes/Product-routes.js';
// import  RouteCategry  from './routes/Categry-router.js';
import path from 'path';
import { RoutesContect } from './routes/Contect.js';
const app = express();
const filename = fileURLToPath(import.meta.url);
const __dirname = path.join(filename);
app.use(cors({
//    origin:['http://localhost:5023'],
    methods:["GRT","POST","PUT","DELETE"],
    credentials:true
}));

app.use(cookieParser());
// routes
app.use('/images', express.static('upload/images'))
// app.use(express.static("upload"));
// app.use('./images' , express.static(path.join(__dirname + './images' ) ));
// app.use('./images' , express.static(__dirname + './images'));
// app.use('/static', express.static(__dirname, 'public'))
mongoose.connect(
    "mongodb+srv://forTesting:test123@cluster0.fzmcorz.mongodb.net/raasCawad?retryWrites=true&w=majority"
)
.then(()=>app.listen(5000)
)
.then(()=>
console.log("Connected To database And listinin")
)
.catch((err)=> console.log(err)
);
app.use(express.json());

app.use(RoutesUser,RouteCategry,RoutesProducts,RoutesContect);
