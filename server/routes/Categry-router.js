import { AddCategry, SearcupdateCategry, UpdatedCategry, deleteCategry, getCategryCount, getCategryList, getCategryOption } from "../controller/Categry.js"

import express from 'express'




export const  RouteCategry = express.Router();

RouteCategry.post('/Categry',AddCategry);
RouteCategry.get('/listCaregry',getCategryList)
RouteCategry.get('/listOption',getCategryOption)
RouteCategry.put('/updatedCategry/:id',UpdatedCategry);
RouteCategry.delete('/deletedCategry/:id',deleteCategry)
RouteCategry.get('/SearcupdateCategry/:id',SearcupdateCategry);
RouteCategry.get('/getCategryCount',getCategryCount)
