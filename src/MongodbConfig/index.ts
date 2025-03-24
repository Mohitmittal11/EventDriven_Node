import mongoose from "mongoose";
import dotev from "dotenv";
dotev.config();

const mongodbConnectDataBase = mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("DataBase is Connected");
  })
  .catch((err) =>
    console.log("Error is occured during database establishment ", err)
  );

export default mongodbConnectDataBase;
