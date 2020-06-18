import { client } from "./client";

export const getAllUsers = async () => {
  try {
    await client.connect();
    const cursor = await client.db("users").collections("data").find();
    return await cursor.toArray();
  } catch (err) {
    throw new Error(err);
  } finally {
    await client.close();
  }
};
