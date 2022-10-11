const express = require("express");
const router = express.Router();
const apiProductsController = require("../../Controllers/api/apiProductsController");

router.get("/apiProducts", apiProductsController.list);
router.get("/apiProducts/:id", apiProductsController.detail);

module.exports = router;