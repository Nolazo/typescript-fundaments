import { addProduct, products, calcStock } from './product.service'

addProduct({
  name: 'Product 1',
  createdAt: new Date(1993, 1, 1),
  stock: 5,
  size: 'S'
  })

console.log(products)
const total = calcStock()
console.log(total)
