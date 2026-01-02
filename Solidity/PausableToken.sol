// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract PausableToken {
    address public owner;
    bool public paused;
    mapping (address => uint) public balances;

    constructor() {
        owner = msg.sender;
        paused = false;
        balances[owner] = 1000;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "YOU ARE NOT THE OWNER");
        _;
    }

    modifier notPaused(){
        require(!paused, "CONTRACT IS PAUSED");
        _;
    }

    function pause() public onlyOwner {
        paused = true;
    }

    function transfer(address to, uint amount) public notPaused {
        require(balances[msg.sender] >= amount, "YOU DO NOT HAVE ENOUGH FUNDS");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}