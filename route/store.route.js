const express=require("express")
const StoreController=require("../controller/store.controller")
const route=express.Router()


route.get("/store",StoreController.getStoreList)

route.post("/store",StoreController.addStore)





module.exports=route