import { getAllProducts } from "../../db";

const express = require("express");

const router = express.Router();

router.get("/beepbop", (_, res) => {
  res.send("<p>Products router testing</p>");
});

router.get("/test", async (_, res) => {
  res.json(await getAllProducts());
});

export default router;
