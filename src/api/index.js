export const getAllProducts = async () => {
  const resp = await fetch("http://localhost:5000/api/products/products");
  return resp.json();
};

export const authenticateUser = async (authDeets) => {
  const resp = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(authDeets),
  });

  return;
};

//formData --  ex: from submission utility data
