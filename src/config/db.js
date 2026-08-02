import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const heyMongo = await mongoose.connect(process.env.MONGO_URI);
    console.log(
        "Witnes is now connected to MongoDB."
    );
  } catch (error) {
    console.error("MongogDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default dbConnect;