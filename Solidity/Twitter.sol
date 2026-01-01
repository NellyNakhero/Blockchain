// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Twitter {
    //create mapping between buser and a tweet
    mapping (address => string) public tweets;

    function createTweet(string memory _tweet) public {
        tweets[msg.sender] = _tweet;
    }

    function getTweet(address _owner) public view returns (string memory) {
        return tweets[_owner];
    }
}