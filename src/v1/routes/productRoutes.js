const express = require("express");
const response = require("../../response/response");
const router = express.Router();
const productController = require("../../controllers/productController");
const jwt = require('express-jwt');
const {createProductSchema, updateProductSchema, deleteroductSchema } = require('../../validator/schemas');
const validateInformation = require('../../middleware/middlewareProduct');

router.get("/",  getAllProductsRoutes);
router.get("/:id", getOneProductRoutes);
router.delete("/", validateInformation(deleteroductSchema), deleteOneProductRoutes);
router.put("/", validateInformation(updateProductSchema), updateProductRoutes);
router.post("/", validateInformation(createProductSchema), newProductRoutes);

async function getAllProductsRoutes (req, res, next) {

    try{

        const items = await  productController.getAllProductsController();
        response.success(req, res, items, 200)

    }catch(err){

        next(err)
    }
    
};

async function getOneProductRoutes(req, res, next){

    try {
        
        const items = await productController.getOneProductController(req.params.id);
        response.success(req, res, items, 200)
    } catch (err) {
        
        next(err)
    }
};

async function newProductRoutes(req, res, next){

    try {
        const items = await productController.newProductController(req.body);
        response.success(req, res, 'Product save success', 201)
    } catch (err) {
        
       next(err)
    }
};

async function updateProductRoutes(req, res, next){

    try {
        const items = await productController.updateProductController(req.body);
        response.success(req, res, 'Product update success', 201)
    } catch (err) {
        
       next(err)
    }
};

async function deleteOneProductRoutes(req, res, next){

    try {
        
        const items = await productController.deleteOneProductController(req.body);
        response.success(req, res, "It was successfully removed", 200)
    } catch (err) {
        
       next(err)
    }
};

module.exports = router;