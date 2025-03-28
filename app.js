import express from 'express';
import dotenv from 'dotenv';
import connectDb from './Db/database.js';
import bodyParser from 'body-parser';
import userRouter from './router/User.js';
const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});
