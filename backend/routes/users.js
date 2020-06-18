import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products router testing");
});
router.get("/users", async (_, res) => {
  res.json(await getAllUser);
});

export default router;
