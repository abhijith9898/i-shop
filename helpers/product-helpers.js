var db= require('../config/connection')

module.exports={
    addProduct(products, callback){
        db.get().collection('product').insertOne(products).then((data)=>{
            
            callback(data.ops[0]._id)
        })
    }
}