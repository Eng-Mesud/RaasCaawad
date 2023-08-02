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
app.use(express.static("upload"));
// app.use('./images' , express.static(path.join(__dirname + './images' ) ));
// app.use('./images' , express.static(__dirname + './images'));
// app.use('/static', express.static(__dirname, 'public'))
mongoose.connect(
   process.env.MONG_URL
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
