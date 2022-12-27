var randomstring = require("randomstring");

exports.generateStoreCode=function(){
   return randomstring.generate({
        length: 5,
        charset: 'alphabetic',
        capitalization :"uppercase"
      });
}

