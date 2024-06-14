const { model, Schema, Types } = require('../connection');

const my schema = new schema({
   user: { type:string .ObjectId, ref: 'user' },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: String,
    avatar: { type: String, default: 'placeholder.png' },
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('user', mySchema);
