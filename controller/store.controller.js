const quaries = require('../database/quary');
const dbConnection = require('../database/connection');
var randomstring = require("../util/generate");



exports.getStoreList = async (req, res) => {

    try {
        var storeQuary = quaries.quaryList.GET_STORE_LIST_QUARY
        var result = await dbConnection.dbQuery(storeQuary)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success get all data from store", data: result }))

    } catch (error) {
        console.log(error)
        return res.status(422).send({ status: 422, message: "faild to list store" })

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
        var addStoreQuary = quaries.quaryList.addStore
         await dbConnection.dbQuery(addStoreQuary)
        return res.status(200).send(JSON.stringify({ status: 200, message: "success to add store" }))



    } catch (error) {
        return res.status(422).send({ status: 422, message: "faild to add store" })

    }




}