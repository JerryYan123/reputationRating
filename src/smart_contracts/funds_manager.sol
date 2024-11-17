// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundsManager {
    address public owner;

    // Event to log deposits
    event Deposit(address indexed sender, uint256 amount);

    // Event to log withdrawals
    event Withdrawal(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender; // Set the deployer as the contract owner
    }

    // Function to receive Ether
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Function to withdraw Ether to a specified address
    function transferFunds(address payable recipient, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance in the contract");
        recipient.transfer(amount);
        emit Withdrawal(recipient, amount);
    }

    // Fallback function to handle non-standard calls
    fallback() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Function to check the contract balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
