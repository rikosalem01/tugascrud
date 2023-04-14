import user from "../models/user.js";
import bcrypt from "bcryptjs";
// import { jwt } from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "berhasil",
      data: newUser,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "gagal! silahkan coba lagi",
    });
  }
};
