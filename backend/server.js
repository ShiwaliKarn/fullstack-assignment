import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// mongoose
//   .connect(process.env.MONGODB_COONECTION_STRING)
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Server is running");
});
