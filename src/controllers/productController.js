const productService = require("../services/productService");

function getAllProductsController(){
    return allProducts = productService.getAllProductsService();
}

function getOneProductController(id){
    return  productService.getOneProductService(id);
}

function updateProductController(body){
    return productService.updateProductService(body)
}

function newProductController(body){
    return productService.newProductService(body)
}

function deleteOneProductController(body){
    return  productService.deleteOneProductService(body);
}


module.exports = {
    getAllProductsController,
    getOneProductController,
    deleteOneProductController,
    newProductController,
    updateProductController
}