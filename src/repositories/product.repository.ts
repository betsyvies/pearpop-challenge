import path from 'path';
import { promises as fs } from 'fs';
import { Product } from '../interfaces/product';

export const getAllProducts = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  return JSON.parse(fileContents);
};

export const getProductById = async (id: string) => {
  const products = await getAllProducts();
  const product = products.find((product: Product) => product.productId === parseInt(id, 10))  
  
  return product;
};
