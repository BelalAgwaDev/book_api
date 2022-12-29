const express=require("express")
const bookController=require("../controller/book.controller")
const route=express.Router()


route.get("/book",bookController.getBookList)

route.post("/book",bookController.addBook)

route.get("/book/:id",bookController.getBookDetails)


route.put("/book",bookController.updateBook)


route.delete("/book/:id",bookController.deleteBook)


module.exports=route