(() => {
  type Sizes = 'S' | 'M' | 'XL';

  function createProducttoJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
    ){
      return {
        title,
        createdAt,
        stock,
        size
      }
    }

  const producto1 = createProducttoJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  const createProducttoJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
    ) => {
      return {
        title,
        createdAt,
        stock,
        size
      }
  }

  const producto2 = createProducttoJsonV2('P1', new Date(), 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);
})();
