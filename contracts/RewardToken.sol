// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// 1000000000000000000000

contract RewardToken is ERC20 {
  uint256 public s_maxSupply = 1000000000000000000000000;
    constructor() ERC20("SIRINU", "SIU") {
        _mint(msg.sender, s_maxSupply);
    }
}