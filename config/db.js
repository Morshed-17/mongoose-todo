const mongoose = require("mongoose");

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log({ message: "Db connection established" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = main
