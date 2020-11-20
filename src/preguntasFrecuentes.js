
let fs = require("fs")
module.exports = {
    faqsJson : function(){    
       return JSON.parse(fs.readFileSync('./data/faqs.json','utf-8'));
    }
}

