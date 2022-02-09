/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: establish Mysql Connection.
*/
// establish Firebase Connection.


function FirebaseConnect() {

  this.firebase = require("firebase-admin");
  this.serviceAccount = require("./serviceAccountKey.json");

  this.firebase.initializeApp({
    credential: this.firebase.credential.cert(this.serviceAccount),
    databaseURL: "https://massive-cocoa-210221.firebaseio.com"
  });

}

module.exports = new FirebaseConnect();