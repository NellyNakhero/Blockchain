// SPDX-Licence-Identifier: MIT

pragma solidity 0.8.30;

contract Account {
    //// State variable to store data
    uint public totalAccounts;
    address[] public accounts;

    //Use a struct named User
    struct User {
        string name;
        uint age;
        bytes32 email;
        uint256 lastUpdated;
    }
    mapping ( address => User) public usersProfiles;

    event UserRegistered(address userAddress, string name, uint age, bytes32 email);
    event UserUpdated(address userAddress, string name, uint age, bytes32 email);

    

    function register(string memory _name, string memory _email, uint _age) public {
        require(usersProfiles[msg.sender].email == 0, "User already registered");

        bytes32 convertedEmail = bytes32(bytes(_email));

        usersProfiles[msg.sender] = User({
            name: _name,
            age: _age,
            email: convertedEmail,
            lastUpdated: block.timestamp
        });
        
        emit UserRegistered(msg.sender, _name, _age, convertedEmail);

        accounts.push(msg.sender);
        totalAccounts += 1;
    }

    function updateProfile(string memory _name, string memory _email, uint _age) public {
        require( usersProfiles[msg.sender].email != 0, "User not registered");

        bytes32 convertedEmail = bytes32(bytes(_email));

        usersProfiles[msg.sender].name = _name;
        usersProfiles[msg.sender].age = _age;
        usersProfiles[msg.sender].email = convertedEmail;
        usersProfiles[msg.sender].lastUpdated = block.timestamp;

        emit UserUpdated(msg.sender, _name, _age, convertedEmail);
        
    }

    //public getter function
    function getProfile(address userAddress) public view returns (string memory name, uint  age, bytes32  email) {
        require(usersProfiles[userAddress].email != 0, "User not found");
        return (usersProfiles[userAddress].name, usersProfiles[userAddress].age, usersProfiles[userAddress].email);
    }
}