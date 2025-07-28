// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

library Math {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    function subtract(uint256 a, uint256 b) internal pure returns(uint256) {
        require(b <= a, "subtraction underflow");
        return a - b;
    }
}

abstract contract VaultBase {
    mapping(address => uint256) internal balances;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event Transfer( address indexed from, address indexed to, uint256 amount);


    function getBalance(address user) external view returns(uint256) {
        return balances[user];
    }

    function deposit() external payable virtual;
    function withdraw(uint256 amount) external virtual;
}

contract VaultManager is VaultBase {
    using Math for uint256;

    function deposit() external payable override {
        if (msg.value == 0) {
            revert("Cannot deposit 0 ETH");
        }

        uint256 bal = balances[msg.sender];
        bal = bal.add(msg.value);
        balances[msg.sender] = bal;
        
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external override {
        require(amount > 0, "Withdraw amount has to be greater than 0");
        require(balances[msg.sender] >= amount, "You have insufficient balance");

        balances[msg.sender] = balances[msg.sender].subtract(amount);
        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }

    function transfer(address _to, uint256 amount) public returns(bool success) {
        require(balances[msg.sender] >= amount, "Insufficient Funds");
        balances[msg.sender] -= amount;
        balances[_to] += amount;

        emit Transfer(msg.sender, _to, amount);

        return true;
    }
}