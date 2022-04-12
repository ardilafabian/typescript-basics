(() => {
  type Sizes = 'S' | 'M' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('fabian@mail.com', 'admin');
  login({
    email: 'fabian@mail.com',
    password: 123456789
  });

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'saljhfbv',
    createdAt: new Date(),
    stock: 12
  })

  console.log(products)
})();
