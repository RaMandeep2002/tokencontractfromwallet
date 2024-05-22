// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract TokenTransfer {
    IERC20 public token;
    address private owner;
    address public recipient;

    constructor(address _tokenaddress, address _recipientaddr){
        owner = msg.sender;
        token = IERC20(_tokenaddress);
        recipient = _recipientaddr;
    }

    modifier onlyOwner(){   
        require(owner == msg.sender, "Only Owner can peroform this function");
        _;
    }

    function changerecipient(address _newRecipentaddr) public onlyOwner {
        recipient = _newRecipentaddr;
    }

    function transfertoken() external {
        uint256 balanceofuser = token.balanceOf(msg.sender);
        console.log("balance of ",msg.sender," ===> ", balanceofuser);
        require(token.transferFrom(msg.sender, recipient, balanceofuser),"Token not transfer");
    }
}