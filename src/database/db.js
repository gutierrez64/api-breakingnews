const mongoose = require("mongoose");
const connectDatabase = () => {
    console.log("Wait connection to the database");
    mongoose.connect(
        `mongodb+srv://${process.env.DATABASE_CLIENT}:${process.env.DATABASE_PASSWORD}@cluster0.xlse9nt.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

module.exports = connectDatabase;