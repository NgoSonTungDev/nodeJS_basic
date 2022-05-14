const userControlller = require("../controllers/userController")
const router = require("express").Router();

//add user

router.post("/",userControlller.addUser)
router.get("/",userControlller.getUSer)

 
module.exports = router;