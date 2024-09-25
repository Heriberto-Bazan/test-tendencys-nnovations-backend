const database = require('../database/connection');

const TABLE = 'test_product'

function getAllProductsService() {

    try {
        const getAllProducts = database.getAllProductsQuery(TABLE);
        return getAllProducts;
    } catch (error) {
        throw error;
    }
};

function getOneProductService(id) {
    
    try {

        const getOneProduct = database.getOneProductQuery(TABLE, id);
        return getOneProduct;
    } catch (error) {
        throw error;
    }
};

function deleteOneProductService(body) { 
    try {

        const deleteOneProduct = database.deleteOneProductQuery(TABLE, body);
        return deleteOneProduct;
    } catch (error) {
        throw error;
    }
}

function newProductService(body){
    try {

        const newProduct = database.createProductQuery(TABLE, body);
        return newProduct;
    } catch (error) {
        throw error;
    }
}

function updateProductService(body){
    try {

        const updateProduct = database.updateProductQuery(TABLE, body);
        return updateProduct;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllProductsService,
    getOneProductService,
    deleteOneProductService,
    newProductService,
    updateProductService
}