import "dotenv/config";
import ERC721 from "./ERC721";
import { ethers } from "ethers";

const provider = () => {
  try {
    const nodeUrl = process.env.NODE_URL;
    const apiKey = process.env.API_KEY;

    const provider = new ethers.providers.JsonRpcProvider(
      nodeUrl + "?api_key=" + apiKey
    );

    return provider;
  } catch (error) {
    console.log(error);
  }
};
