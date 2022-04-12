import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'saljhfbv',
  createdAt: new Date(),
  stock: 12
});

const totalStock = calcStock();

console.log(products);
console.log(totalStock);
