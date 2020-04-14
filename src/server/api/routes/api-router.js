const express = require('express');
const router = express.Router();

// Router imports
const deleteSpecificBatchDataRouter = require('./delete-specfic-batch.router');

// swagger-ui-express
const swaggerDocument = require('../../config/swagger.json');
const swaggerUi = require('swagger-ui-express');

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/delete-specific-data', deleteSpecificBatchDataRouter);


module.exports = router;
