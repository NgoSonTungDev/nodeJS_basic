const userControlller = require("../controllers/userController")
const router = require("express").Router();

router.post("/",userControlller.addUser)
router.get("/",userControlller.getUSer)
router.get("/:id",userControlller.getAnUSer)
router.put("/:id",userControlller.UpdateAnUSer)
router.delete("/:id",userControlller.deleteAnUSer)

module.exports = router;