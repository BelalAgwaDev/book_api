const express=require("express")
const StoreController=require("../controller/store.controller")
const route=express.Router()


route.get("/store",StoreController.getStoreList)

route.post("/store",StoreController.addStore)

route.delete("/store/:storeId",StoreController.deleteStore)

route.put("/store",StoreController.updateStore)



module.exports=route