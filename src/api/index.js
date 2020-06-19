export const getAllProducts = async () => {
  const resp = await fetch("http://localhost:5000/api/products/products");
  return resp.json();
};
