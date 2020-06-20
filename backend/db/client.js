import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect;

  process.on("SIGINT", () => {
    client.close().then(() => {
      console.info("SIGINT signal received. Closing MongoClient.");
      process.exit(0);
    });
  });
})();
