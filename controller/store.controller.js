const quaries = require('../database/quary');
const dbConnection = require('../database/connection');
var randomstring = require("../util/generate");



exports.getStoreList = async (req, res) => {

    try {
        var storeQuary = quaries.quaryList.GET_STORE_LIST_QUARY
        var result = await dbConnection.dbQuery(storeQuary)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success get all data from store", data: result.rows }))

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to list store database" })

    }

    
}



exports.addStore = async (req, res) => {
    try {
        var createdBy = "admin"
        var createdOn = new Date();
        var storeName = req.body.storeName
        var storeAddress = req.body.storeAddress

        if (!storeName || !storeAddress) {
            return res.status(422).send({ status: 422, message: "store name and address are require " })

        }
        let storeCode = randomstring.generateStoreCode()
        values=[storeName,storeAddress,storeCode,createdOn,createdBy]
        var addStoreQuary = quaries.quaryList.SAVE_STORE_QUARY
         await dbConnection.dbQuery(addStoreQuary ,values)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to add store" }))



    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to add store database" })

    }




}






exports.updateStore = async (req, res) => {
    try {
        var createdBy = "admin"
        var createdOn = new Date();
        var storeName = req.body.storeName
        var storeAddress = req.body.storeAddress
        var storeId = req.body.storeId
        var storeCode = req.body.storeCode

        if (!storeName || !storeAddress||!storeId ||!storeCode) {
            return res.status(422).send({ status: 422, message: "store name ,id,and address are require " })

        }
        values=[storeName,storeAddress,storeCode,createdOn,createdBy,storeId]
        var updateStoreQuary = quaries.quaryList.UPDATE_STORE_QUARY
         await dbConnection.dbQuery(updateStoreQuary ,values)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to update store" }))



    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to add store database" })

    }




}






exports.deleteStore = async (req, res) => {
    try {
    
        var storeId = req.params.storeId


        if (!storeId) {
            return res.status(422).send({ status: 422, message: "store id are require " })

        }
        
        var updateStoreQuary = quaries.quaryList.DELETE_STORE_QUARY
         await dbConnection.dbQuery(updateStoreQuary ,[storeId])
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to delete store" }))



    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, message: "faild to delete store database" })

    }




}