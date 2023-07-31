import multer from "multer";
import { AddProducts, ProductsSearch, Searcupdateid, deleteProducts, getImage, getProduct_id, getProduct_id_Inf, getProductsCount, getProductsList, getProductsListHomebageslimit20, getProductsListLets_INFORMATION, getProductsPublishedCount, getProductsUnPublishedCount, publishedUpdated, upload } from "../controller/Products.js"


import express from 'express'

export const RoutesProducts  = express.Router();

// ,upload.single("avatar")
RoutesProducts.get('/productslist',getProductsList);
RoutesProducts.post('/AddProduct',upload.single("image"),AddProducts);
RoutesProducts.get('/upload/:images',getImage);
RoutesProducts.delete('/Productsdeleted/:id',deleteProducts);
RoutesProducts.get('/productslistId/:id',getProduct_id)

// RoutesProducts.get('/productslistId/:id',getProduct_id)
RoutesProducts.get('/productslistId_list/:id',getProduct_id_Inf);
RoutesProducts.get('/productLetst',getProductsListLets_INFORMATION);
RoutesProducts.get('/product_search',ProductsSearch);
RoutesProducts.put('/Updated_published/:id',upload.single("image"),publishedUpdated);
RoutesProducts.get('/Searcupdateid/:id',Searcupdateid);
RoutesProducts.get('/getProductsCount',getProductsCount);
RoutesProducts.get('/getProductsPublishedCount',getProductsPublishedCount)
RoutesProducts.get('/getProductsUnPublishedCount',getProductsUnPublishedCount)


//getProductsListHomebageslimit20 

RoutesProducts.get('/getProductsListHomebageslimit20',getProductsListHomebageslimit20);