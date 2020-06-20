import { getAllProducts } from "db";

const express = require("express");

const router = express.Router();

router.get("/test", (_, res) => {
  res.send("<p>Products router testing</p>");
});

router.get("/products", async (_, res) => {
  res.send(await getAllProducts());
});

export default router;
