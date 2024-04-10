const mongoose = require('mongoose');
const url ="mongodb+srv://prachi:8924091704@cluster0.vpp9npr.mongodb.net/videonotes?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous function
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
    
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;