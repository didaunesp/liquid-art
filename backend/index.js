const express = require("express");
const cors = require("cors");
const app = express();
const tokens = require("./tokens.json");

app.use(cors());

app.get("/:tokenId", (req, res) => {
  const { tokenId } = req.params;
  const token = tokens[tokenId];
  if (typeof token === "undefined") {
    res.status(400).json({ error: `Token id ${tokenId} not found` });
  }
  return res.json(token);
});

app.listen(8003);

console.log("app started on port 8003");
