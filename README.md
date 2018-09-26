
HTML + Spring Boot

## REST SERVICES

**GET :: /api/product/detail?id={param}**
param = product id

response:
```json
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
```
**GET :: /api/product/list**
No Params

response:
```json
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
```
**POST :: /api/product/buy**

request:
```json
{
  "product_id": 1,
  "credit_card": "planta1",
  "address": "13.00",
  "credit_card_holder": "30"
}
```