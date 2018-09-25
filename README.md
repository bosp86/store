
HTML + Spring Boot

REST SERVICES

GET :: /api/product/detail?id={param}
param = product id

response:
{
  id: 1,
  name: "planta1",
  price: "13.00",
  quantity: 30,
  category: "plantas",
  detail: {
  color: [
        "rojo",
        "verde"
        ]
  }
}

GET :: /api/product/list
No Params

response:

[
  {
    id: 1,
    name: "planta1",
    price: "13.00",
    quantity: 30,
    category: "plantas"
  },
  {
    id: 2,
    name: "planta2",
    price: "14.00",
    quantity: 50,
    category: "plantas"
  },
  {
    id: 3,
    name: "planta3",
    price: "30.00",
    quantity: 62,
    category: "plantas"
  }
]

POST :: /api/product/buy

request:

...............
