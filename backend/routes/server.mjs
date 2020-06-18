import cors from "cors";
import express from "express";

import users from "./routes/users";

const app = express();
const PORT = 80;

app.get("/", (_, res) => res.send("<p>Hello from Express!</p>"));

app.listen(PORT, () => {
  console.info(`run server: http://localhost:${PORT}`);
});

(async () => {
  console.log(await getAllUsers());
})();
