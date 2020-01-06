const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://music-studio:music-studio1@ds133558.mlab.com:33558/music-studio',
            //mongodb://shop:shop123@ds037611.mlab.com:37611/shopping-db
            // 'mongodb+srv://monire:monire@cluster0-hhl1s.mongodb.net/test?retryWrites=true&w=majority'
            {
                useNewUrlParser: true,
                 useUnifiedTopology: true
    });

        console.log('connected to db');
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = connectDB;

//'mongodb://shop:shop123@ds037611.mlab.com:37611/shopping-db'