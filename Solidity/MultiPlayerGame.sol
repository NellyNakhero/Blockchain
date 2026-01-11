// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract MultiPlayerGame {
    mapping (address => bool) public players;

    function joinGame() public virtual {
        players[msg.sender] = true;
    } 
}

contract Game is MultiPlayerGame {
    string public gameName;
    uint public playerCount;

    constructor(string memory _gameName) {
        gameName = _gameName;
        playerCount = 0;
    }

    function startGame() public {}

    function joinGame() public override {
        super.joinGame();
        playerCount++;
    }
}