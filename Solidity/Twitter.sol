// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Twitter {
    struct Tweet {
        address author;
        string content;
        uint256 timestamp;
        uint256 likes;
    }

    //create mapping between buser and a tweet
    mapping (address => Tweet[]) public tweets;

    string[] public actions = ["like", "reply", "reshare"];

    function createTweet(string memory _tweet) public {
        Tweet memory newTweet = Tweet({
            content : _tweet, 
            timestamp: block.timestamp, 
            author: msg.sender,
            likes: 0
        });
        tweets[msg.sender].push(newTweet);
    }

    function getTweet(address _owner, uint _index) public view returns (string memory) {
        return tweets[_owner][_index].content;
    }

    function getAllOwnerTweets(address _owner) public view returns (Tweet[] memory) {
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