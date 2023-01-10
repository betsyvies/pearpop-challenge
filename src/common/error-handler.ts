import { NextApiResponse } from "next";

export const errorHandler = (err: any, res: NextApiResponse) => {
    if (typeof (err) === 'string') {
        const is404 = err.toLowerCase().endsWith('not found');
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({ message: err });
    }

    return res.status(500).json({ message: err.message });
}
