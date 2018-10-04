export const getAll = () => fetch(`/api/product/list`).then(res => res.json());

export const get = productId =>
  fetch(`/api/product/detail?id=${productId}`).then(res => res.json());
