import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

type Body = {
  id: number;
  data: any;
};

type Data = {
  error?: string;
};

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id, data }: Body = JSON.parse(req.body);
  if (!id || !data)
    return res.status(400).json({ error: "Missing parameters" });
  await prisma.log.update({ where: { id }, data });
  res.status(200).json({});
};

export default NextApi;
