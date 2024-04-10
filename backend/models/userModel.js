const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name : {type : string, require:true},
    email : {type : string, require:true, unique:true},
    password : string,
    avatar : { type:string, default: 'placeholder.png'},
    role : {type:string, default:'user'},
    createdAt: {type:Date, default:Date.now}
})

module.exports = model('user',mySchema);
