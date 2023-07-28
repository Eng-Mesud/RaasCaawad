

import express from 'express'

import { AddContect, getContectCount, getContectList } from '../controller/Contect.js';

export const RoutesContect = express.Router()

RoutesContect.post("/addcontect",AddContect);
RoutesContect.get('/getContectList',getContectList);
RoutesContect.get('/getContectCount',getContectCount);


