// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AutoForwarder {
    // Hardcoded recipient address
    address payable public recipient;
    address owner;

    event Forwarded(address indexed from, address indexed to, uint256 amount);

    // Constructor to set the recipient address
    constructor(address payable _recipient) {
        owner = msg.sender;
        require(_recipient != address(0), "Recipient address cannot be zero");
        recipient = _recipient;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "this function is called by owner only!!");
        _;
    }
    function changeRecipentddr(
        address payable _newaddress
    ) external onlyOwner returns (bool) {
        recipient = _newaddress;
        return true;
    }

    // Internal function to handle the forwarding of Ether
    function BuyToken() public payable {
        uint256 amount = msg.value;
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
        emit Forwarded(msg.sender, recipient, amount);
    }

    // Fallback function to handle incoming Ether and forward it
    receive() external payable {
        require(msg.value > 0, "No Ether sent");
        BuyToken();
    }
}
