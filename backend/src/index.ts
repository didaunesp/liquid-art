import express, { Request, Response } from "express";
import cors from "cors";

import blockchain from "./blockchain";

const tokens = require("./tokens.json");

const app = express();

app.use(cors());

app.get("/nft/:tokenId", (req: Request, res: Response): Response => {
  const { tokenId } = req.params;
  const token = tokens[tokenId];
  if (typeof token === "undefined") {
    res.status(400).json({ error: `Token id ${tokenId} not found` });
  }
  return res.json(token);
});

app.get("/blockchain", (req: Request, res: Response) => blockchain(req, res));

app.listen(8003);

console.log("app started on port 8003");
