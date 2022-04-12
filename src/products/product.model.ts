export type Sizes = 'S' | 'M' | 'XL';
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
