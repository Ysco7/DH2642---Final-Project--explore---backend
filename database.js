const mongoose = require('mongoose');

async function initDatabase() {
    await mongoose.connect('mongodb+srv://dh2642:zxsaqw@cluster0.jv7mt.mongodb.net/test?retryWrites=true&w=majority', {
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
