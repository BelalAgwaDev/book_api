var pool=require("./pool")

exports.dbQuery=(quaryText, quaryValues)=>{
    return new Promise((resolve,reject)=>{
        pool
        .query(quaryText, quaryValues)
        .then(res => {
      resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}
