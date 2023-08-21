const express = require("express");
const path = require("path");
const router = express.Router();
const routerdetails = require("../controller/Details");

router.get("/dashboard", routerdetails.getdashborad);
router.get("/addcontract", routerdetails.getaddcontract);
router.post("/getdetails", routerdetails.getdetails);
router.get("/aboutus", routerdetails.getaboutus);
router.post("/addcontract", routerdetails.postcontract);
router.get("/details", routerdetails.getcontractdetailsbyid);
router.post("/addinventory", routerdetails.postinventory);

module.exports = router;
