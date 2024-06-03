const references = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${references.firstName} from ${references.campus} `,
    e : "oO",
    T : "U "
    
}));
