//add authentication for email and password
import { registerUser, loginUser } from "../../db";

const express = require("express");

const router = express.Router();

router.post("/user/register", async ({ body }, res) =>
  res.json(await registerUser(body))
);

router.post("/user/login", async ({ body }, res) => {
  const results = await loginUser(body);
  if (results === null) {
    res.statusCode = 401;
  } else {
    res.statusCode = 200;
  }
  res.send();
});

export default router;
