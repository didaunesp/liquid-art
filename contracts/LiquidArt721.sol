// SPDX-License-Identifier: ISC
pragma solidity ^0.8.9;

import "@oppenzeppelin/contracts/token/ERC721/ERC721.sol";

contract LiquidArt721 is ERC721 {
    uint public nextTokenId;
    address public admin;

 constructor() ERC721('Liquid Art', 'LQART') {
    admin = msg.sender;
 }

 function mint(address to) external {
    require(msg.sender == admin, 'only admin');
    _safeMint(to, nextTokenId);
    nextTokenId++;
 }

 function _baseURI() internal view override returns (string memory){
    return 'http://localhost:1313';
 }

}