const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB

// const mongoose = require("mongoose");
// console.log("mongo db ");
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true, // This is optional but recommended
//             useFindAndModify: false // This is optional but recommended
//         });
//         console.log("MongoDB Connected: ", conn.connection.host);
//     } catch (err) {
//         console.error(err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;
