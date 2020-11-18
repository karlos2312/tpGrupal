
const fs = require('fs')

module.exports = {
    bd : './data/faqs.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    }
}

