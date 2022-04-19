const express = require('express');
const multer = require('multer');
const router = new express.Router();
const controller = require('../controller/appController')
const upload = require('../utils/upload');
//const upload = multer({ storage: multer.memoryStorage() })

let routes = (app) => {
    try {
        router.post('/api/excel/upload', upload.single('file'), controller.upload);
        app.use(router);    
    } catch (error) {
        console.log(error);
    }
};

module.exports = routes;