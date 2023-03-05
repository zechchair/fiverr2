import type { NextApiRequest, NextApiResponse } from "next";
import {
  verify,
  editAccount,
  Account,
  readAccount,
} from "../../../controller/Auth";
import { serialize } from "cookie";
import argon2 from "argon2";

type Body = {
  token: string;
  account: Account;
  password: string;
};

type Data = {
  error?: string;
};

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { token, account, password }: Body = JSON.parse(req.body);
  if (!token || !account || password === undefined || password === null)
    return res.status(400).json({ error: "Missing parameters" });
  const result = await verify(token);
  if (result === null) return res.status(401).json({ error: "Invalid token" });
  const currentAccount = readAccount();
  account.username = currentAccount.username;
  account.password =
    password === "" ? currentAccount.password : await argon2.hash(password);
  const newToken = editAccount(account);
  res
    .setHeader("Set-Cookie", serialize("token", newToken, { path: "/" }))
    .status(200)
    .json({});
};

export default NextApi;
