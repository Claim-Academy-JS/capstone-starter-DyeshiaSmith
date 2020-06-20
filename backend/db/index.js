import { client } from "./client";

export const getAllProducts = async () => {
  try {
    const cursor = await client.db("equipped").collection("products").find({});
    const results = await cursor.toArray();
    console.log(results);
    await cursor.close();
    return results;
  } catch (err) {
    throw new Error(err);
  }
};
