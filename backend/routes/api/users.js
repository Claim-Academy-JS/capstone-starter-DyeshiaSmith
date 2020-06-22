//add authentication for email and password
import { registerUser, loginUser } from "../../db";

const express = require("express");

const router = express.Router();

router.post("/user/register", async ({ body }, res) =>
  res.json(await registerUser(body))
);

router.post("/user/login", async ({ body }, res) => {
  const results = await loginUser(body);
  if (!results) {
    res.status(403);
  }

  res.json(results);
});

export default router;
