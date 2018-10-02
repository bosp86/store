export const getAll = () => fetch(`/api/product/list`).then(res => res.json());
