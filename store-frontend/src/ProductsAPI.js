export const getAll = () => fetch(`/api/product/list`).then(res => res.json());

export const get = productId =>
  fetch(`/api/product/detail?id=${productId}`).then(res => res.json());

export const buy = product =>
  fetch(`/api/product/buy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  }).then(res => res.json());
