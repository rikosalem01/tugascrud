import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import userRouter from "./router/user.js";
import authRouter from "./router/auth.js";

const app = express();
const port = 3300;
const corsOptions = {
  origin: true,
  credential: true,
};

db.authenticate();
try {
  console.log("database conect");
} catch (error) {
  console.log("not connect");
}

(async () => {
  await db.sync();
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.listen(port, () => {
  console.log("listening on port : ", port);
});
