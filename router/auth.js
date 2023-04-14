import { register } from "../controler/authcontroler.js";
import express from "express";

const router = express.Router();

router.post("/register", register);

export default router;
