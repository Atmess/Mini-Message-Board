const {Router} = require("express")

const indexRouter = Router();
const usercontroler = require("../controllers/controler")




indexRouter.get("/",usercontroler.getMessage)
indexRouter.get("/new",usercontroler.CreateMessageGet)
indexRouter.post("/new",usercontroler.CreateMessagePost)


module.exports=indexRouter;