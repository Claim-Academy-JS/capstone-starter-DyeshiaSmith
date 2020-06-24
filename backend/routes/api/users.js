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
    res.statusText = "invalid username or password";
    res.send();
  } else {
    res.statusText = "true";
  }
  res.send({ body: "success" });
});

export default router;
