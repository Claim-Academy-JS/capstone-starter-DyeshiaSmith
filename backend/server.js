import cors from "cors";
import express from "express";

import products from "./routes/api/products";

import users from "./routes/api/users";

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

app.use(express.json());

app.use("/api/users", users);

app.listen(PORT, () => {
  console.info(`run server: http://localhost:${PORT}`);
});

(async () => {
  try {
    console.log(await getAllProducts());
  } catch (e) {
    console.error(e);
  }
})();
