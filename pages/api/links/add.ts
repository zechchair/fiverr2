import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "../../../controller/Auth";
import prisma from "../../../prisma/prisma";
import {User} from "../../../types/User";
import {Product} from "../../../types/Product";
import {Payment} from "../../../types/Payment";

type Body = {
  token: string;
  defaultData: {
    user: User;
    product: Product;
    payment: Payment;
  };
  pages: number[];
  single: boolean;
  description: string;
  capitalLetters: boolean;
  lowerLetters: boolean;
  numbers: boolean;
};

type Data = {
  url?: any;
  error?: string;
};

const capitalLettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLettersString = "abcdefghijklmnopqrstuvwxyz";
const numbersString = "0123456789";

const generateUrl = (length: number, character: string) => {
  let result = "";
  for (let i = 0; i < length; i++)
    result += character.charAt(Math.floor(Math.random() * character.length));

  return result;
};

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { token, defaultData, pages, single, description, capitalLetters, lowerLetters, numbers}: Body =
    JSON.parse(req.body);
  if (
    !token ||
    !defaultData ||
    !pages ||
    single === null ||
    single === undefined ||
    !description ||
    capitalLetters === null ||
    capitalLetters === undefined ||
    lowerLetters === null ||
    lowerLetters === undefined ||
    numbers === null ||
    numbers === undefined
  )
    return res.status(400).json({ error: "Missing parameters" });
  const result = await verify(token);
  if (result === null) return res.status(401).json({ error: "Invalid token" });

  //Generate url
  const characters = `${capitalLetters ? capitalLettersString : ""}${
    lowerLetters ? lowerLettersString : ""
  }${numbers ? numbersString : ""}`;
  let url = generateUrl(16, characters);
  let linkResult = await prisma.link.findUnique({ where: { url } });
  while (linkResult !== null) {
    url = generateUrl(16, characters);
    linkResult = await prisma.link.findUnique({ where: { url } });
  }

  await prisma.link.create({
    data: {
      url,
      defaultData: JSON.stringify(defaultData),
      description,
      single,
      pages,
      active: true,
    },
  });

  res.status(200).json({ url });
};

export default NextApi;
