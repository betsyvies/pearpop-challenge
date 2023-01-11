import { NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "./error-handler"

export const apiHandler = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method?.toLowerCase();

  if (!method || !handler[method])
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  try {
    await handler[method](req, res);
  } catch (error) {
    errorHandler(error, res);
  }
}
