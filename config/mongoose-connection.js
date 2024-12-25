const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://test:test@cluster0.roi92.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(function(){
    console.log('connected')
})
.catch(function(err){
    console.log(err);
    
})


module.exports = mongoose.connection