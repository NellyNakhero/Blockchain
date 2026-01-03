// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Twitter {
    uint16  constant MAX_TWEET_LENGTH = 280;

    struct Tweet {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
        uint256 likes;
    }

    //create mapping between buser and a tweet
    mapping (address => Tweet[]) public tweets;

    string[] public actions = ["like", "reply", "reshare"];

    function createTweet(string memory _tweet) public {
        require(bytes(_tweet).length > 0, "Tweet cannot be empty");
        require(bytes(_tweet).length <= MAX_TWEET_LENGTH, "Tweet cannot be more than 280 characters");

        Tweet memory newTweet = Tweet({
            id: uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))),
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
        require(msg.sender == _owner, "You can only get your own tweets");
        return tweets[_owner];
    }

    function likeTweet(address _author, uint tweetIndex) external {
        require(tweets[_author][tweetIndex].author == _author, "Tweet does not exist");
        
        tweets[_author][tweetIndex].likes += 1;
    }

    function unLikeTweet(address _author, uint tweetIndex) external {
        require(tweets[_author][tweetIndex].author == _author, "Tweet does not exist");
        require(tweets[_author][tweetIndex].likes > 0, "Tweet does not have any likes");
        
        tweets[_author][tweetIndex].likes -= 1;
    }

    function getTweetLikes(address _author, uint tweetIndex) external view returns(uint) {
        require(tweets[_author][tweetIndex].author == _author, "Tweet does not exist");

        return tweets[_author][tweetIndex].likes;
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