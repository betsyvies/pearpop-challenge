
import { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../src/common/api-handler';
import { getAllProducts } from '../../../src/repositories/product.repository';

const getProducts = async (_: NextApiRequest, res: NextApiResponse<string>) => {
  const products = await getAllProducts();
  return res.status(200).json(products);
};

export default apiHandler({
  get: getProducts,
});
