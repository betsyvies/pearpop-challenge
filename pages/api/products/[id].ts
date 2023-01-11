import { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../src/common/api-handler';
import { getProductById as getById } from '../../../src/repositories/product.repository';
import { ResponseType } from '../../../src/interfaces/response';
import { Product } from '../../../src/interfaces/product';

const getProductById = async (req: NextApiRequest, res: NextApiResponse<ResponseType<Product>>) => {
  const product = await getById(req.query.id as string);
  return res.status(200).json({ result: product });
};

export default apiHandler({
  get: getProductById,
});
