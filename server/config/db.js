require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connecting = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected : ${connecting.connection.host}`);
  } catch (err) {
    console.log(`Xatolik ConnectDB : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
