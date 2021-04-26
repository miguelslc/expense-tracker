const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err){
        console.log(`ERROR: ${err}`.red);
        process.exit(1);
    }
}

module.exports = conectDB;