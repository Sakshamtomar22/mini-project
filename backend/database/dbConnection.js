import mongoose from "mongoose";

export const dbConnection = () => {
  const dbURI = process.env.MONGO_URI;
  if (!dbURI) {
    throw new Error("MONGO_URI is not defined. Check your environment variables.");
  }

  mongoose
    .connect(dbURI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to database: ${err.message}`);
    });
};
