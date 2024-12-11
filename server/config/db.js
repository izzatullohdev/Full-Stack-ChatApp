const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connecting = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "🚀 ~ file: db.js:connectDB ~ connecting",
      connecting.connection.host
    );
  } catch (err) {
    console.log("🚀 ~ file: db.js:connectDB ~ err", err);
  }
};

module.exports = connectDB;
