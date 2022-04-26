export const isInCart = (product, cartItems, metadata) => {
  const isIn = cartItems.find((item) => item.id === product.id && item.metadata.property === metadata);
  console.log(isIn);
  return isIn
};

export const hasValueAttributes = (product) => {
  const value = product.value.length ? true : false
  console.log(value, product.value);
  return value 
}

const API = 'http://localhost:3001';

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}
