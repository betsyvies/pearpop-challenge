import path from 'path';
import { promises as fs } from 'fs';

export const getAllProducts = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  return fileContents;
};
