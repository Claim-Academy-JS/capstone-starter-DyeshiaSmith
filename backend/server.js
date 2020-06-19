import cors from "cors";
import express from "express";

import products from "./routes/api/products";

const app = express();
const PORT = 5000;

app.get("/", (_, res) => res.send("<p>Hello from Express!</p>"));

app.use(express.json());

app.use(
  cors({
    origin: true,
  })
);

app.use("/api/products", products);

app.listen(PORT, () => {
  console.info(`run server: http://localhost:${PORT}`);
});
