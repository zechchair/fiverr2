import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "../../../controller/Auth";
import prisma from "../../../prisma/prisma";

type Body = {
  token: string;
  id: number;
};

type Data = {
  error?: string;
};

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { token, id }: Body = JSON.parse(req.body);
  if (!token || !id)
    return res.status(400).json({ error: "Missing parameters" });
  const result = await verify(token);
  if (result === null) return res.status(401).json({ error: "Invalid token" });
  await prisma.link.delete({ where: { id } });
  res.status(200).json({});
};

export default NextApi;
