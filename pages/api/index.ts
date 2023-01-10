import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "../../src/common/api-handler";

const getVersion = (_: NextApiRequest, res: NextApiResponse) => {
    return res.status(200).json({ "version": "1.0" });
}
export default apiHandler({
    get: getVersion
});