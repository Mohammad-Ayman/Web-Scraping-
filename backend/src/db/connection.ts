import "dotenv/config";
import mongoose from "mongoose";

// Connection URI
const uri =
  "mongodb+srv://mohd22:testifyme@cluster0.98be0ic.mongodb.net/?retryWrites=true&w=majority";
// const uri = `${process.env.DATABASE_URL}`;

// Connect to MongoDB
export const connectToMongo = async () => {
  await mongoose.connect(uri);
};

// Get the default connection
const db = mongoose.connection;

// Event handling for connection success
db.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

// Event handling for connection error
db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

// Event handling for disconnection
db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// // Close the Mongoose connection when the Node.js application is terminated
// process.on("SIGINT", () => {
//   db.close(() => {
//     console.log("Mongoose connection closed due to application termination");
//     process.exit(0);
//   });
// });

export default mongoose;
