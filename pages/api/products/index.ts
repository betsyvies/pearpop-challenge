import { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../src/common/api-handler';
import { getAllProducts } from '../../../src/repositories/product.repository';
import { ResponseType } from '../../../src/interfaces/response';
import { Product } from '../../../src/interfaces/product';

const getProducts = async (_: NextApiRequest, res: NextApiResponse<ResponseType<Product[]>>) => {
  const products = await getAllProducts();
  return res.status(200).json({ result: products }); 
};

export default apiHandler({
  get: getProducts,
});
