const {model, Schema, Types} = require('../connection');

const mySchema = new Schema({
    videoUrl : {type : String, require:true},
    type : {type : String},
    screenshot: {type : String}, 
    user: {type : string .ObjectId, ref: 'user'},
    category: {type : String, default: 'Untitled Category'},
    note: String,
    videoTime: String,
    createdAt: {type:Date, default:Date.now}
})

module.exports = model('note',mySchema);
