import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

type Body = {
  url: string;
};

type Data = {
  id?: any;
  error?: string;
};

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { url }: Body = JSON.parse(req.body);
  if (!url) return res.status(400).json({ error: "Missing parameters" });

  const link = await prisma.link.findUnique({ where: { url } });
  if (!link) return res.status(404).json({ error: "Link not found" });

  const result = await prisma.log.create({
    data: {
      linkId: link.id,
      active: true,
      done: false,
    },
  });

  res.status(200).json({ id: result?.id });
};

export default NextApi;
