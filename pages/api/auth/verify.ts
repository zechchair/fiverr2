import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "../../../controller/Auth";

type Body = {
  token: string;
};

type Data = {
  result?: any;
  error?: string;
};

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { token }: Body = JSON.parse(req.body);
  if (!token) return res.status(400).json({ error: "Missing parameters" });
  const result = await verify(token);
  if (result === null) return res.status(401).json({ error: "Invalid token" });
  res.status(200).json({ result });
};

export default NextApi;
