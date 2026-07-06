const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const heyMongo = await mongoose.connect(process.env.MONGO_URI);
    console.log(
        "Witnes is now connected to MongoDB."
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = dbConnect;