// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@oppenzeppelin/contracts/token/ERC721/ERC721.sol";

contract LiquidArt721 is ERC721 {

 constructor() ERC721("Liquid Art", "LQART") {
    
 }

}