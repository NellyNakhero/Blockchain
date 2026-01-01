// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Twitter {
    //create mapping between buser and a tweet
    mapping (address => string[]) public tweets;

    string[] public actions = ["like", "reply", "reshare"];

    function createTweet(string memory _tweet) public {
        tweets[msg.sender].push(_tweet);
    }

    function getTweet(address _owner, uint _index) public view returns (string memory) {
        return tweets[_owner][_index];
    }

    function getAllOwnerTweets(address _owner) public view returns (string[] memory) {
        return tweets[_owner];
    }

    function updateUserActionsOptions(string memory _action) public {
        actions.push(_action);
    }
    
    function getActionsLength() public view returns (uint) {
        return actions.length;
    }

    function getAction(uint _index) public view returns (string memory) {
        return actions[_index];
    }
}