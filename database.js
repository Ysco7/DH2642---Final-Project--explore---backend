const mongoose = require('mongoose');

async function initDatabase() {
    await mongoose.connect('mongodb://localhost/explore', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, (err)=>{
        if(err){
            console.error('mongodb connect error');
        }
        console.log('mongodb connect success');
    });
}

module.exports = initDatabase;
