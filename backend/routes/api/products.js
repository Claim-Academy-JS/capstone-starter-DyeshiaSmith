import { getAllProducts } from "db";

import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products router testing</p>");
});

router.get("/products", async (_, res) => {
  res.json(await getAllProducts());
});

export default router;
