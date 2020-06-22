import { client } from "./client";

export const getAllProducts = async () => {
  try {
    const cursor = await client.db("equipped").collection("productTest").find();
    const results = await cursor.toArray();
    await cursor.close();
    return results;
  } catch (err) {
    throw new Error(err);
  }
};
