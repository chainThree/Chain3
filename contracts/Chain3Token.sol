pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract Chain3Token is MintableToken {
  string public name = "Chain3";
  string public symbol = "C3";
  uint8 public decimals = 18;
}
