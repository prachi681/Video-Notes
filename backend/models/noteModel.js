const {model, Schema, Types} = require('../connection');

const mySchema = new Schema({
    videoUrl : {type : string, require:true},
    type : {type : string},
    screenshot: {type : String}, 
    user: {type : Types.ObjectId, ref: 'user'},
    note: String,
    videoTime: String,
    createdAt: {type:Date, default:Date.now}
})

module.exports = model('note',mySchema);
