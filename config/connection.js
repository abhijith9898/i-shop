const MongoClient = require('mongodb').MongoClient


const state = {
    db: null,
}

module.exports.connect = function (done) {
    const url = 'mongodb://localhost:27017'
    const dbname = 'shopping'

    // if (state.db) return done()

    MongoClient.connect(url, (err, data)=>{
        if (err) return done(err)
        state.db = data.db(dbname)
        done()
    })
}

module.exports.get = function () {
    return state.db
}

// exports.close = function(done) {
  //  if (state.db) {
   //     state.db.close(function(err, result) {
     //       state.db = null;
       //     state.mode = null;
     //       done(err);
       // })
 //   } 
//}