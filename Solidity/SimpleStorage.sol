// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract SimpleStorage {
    bool public  hasGodInTheirHeart;

    struct Person {
        bool heartPosture;
        string name;
    }
    
    Person  myFriend = Person({heartPosture: true, name: "myPerson"});

    Person[] public people;

    mapping (string => bool) public peoplesHeartPosture;

    function addsPerson(string memory _name, bool _heartPosture) public {
        people.push(Person(_heartPosture, _name ));
        peoplesHeartPosture[_name] = _heartPosture;
    }


    function setGodInTheirHeart(bool _hasGodInTheirHeart) public {
        hasGodInTheirHeart = _hasGodInTheirHeart;
    }

    function checkTheHeart() public view returns(string memory) {
        return hasGodInTheirHeart ? "God is in their heart" : "God is not in their heart";
    }

    function getJesusStateOfHeart() public pure returns (string memory) {
        return "God is always in the heart of Jesus";
    }
}