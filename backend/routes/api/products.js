import getAllProducts from "../../db/index";

import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products router testing</p>");
});

router.get("/products", async (_, res) => {
  res.send(await getAllProducts());
});

export default router;
