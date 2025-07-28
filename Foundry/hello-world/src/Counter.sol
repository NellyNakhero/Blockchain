// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract A {
    using Test for string;
    //state variables
    string public name;
    string public city;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not Owner");
        _;
    }

    modifier notSmartContract() {
        require(msg.sender == address(0), "Calls not allowed for smart contracts");
        _;
    }
    

    constructor(string memory _name, string memory _city) {
        name = _name;
        city = _city;
        owner = msg.sender;
    }

    function setName(string memory _name) public onlyOwner()  {
        name = _name;
    }

    function setCity(string memory _city) public {
        city = _city;
    }

    function doSomething() public virtual returns (string memory){
        return "Doing something in base contract";
    }

    function concat(string memory _name, string memory _city) public pure returns(string memory) {
       return _name.join(_city);
    }

}

contract B is A {
    using Test for uint;

    constructor(string memory _name, string memory _city) A("Nelly", "Kiligi"){}

    function getName() public view returns (string memory) {
        return name;
    }

    function doSomething() public pure override returns (string memory) {
        return "Doing something in the derived contract";
    }

    function math(uint a, uint b) public pure returns(uint) {
        return a.add(b);
    }
}

library Test {
    function join (string memory a, string memory b) public pure returns(string memory) {
        return string(abi.encodePacked(a, b));
    }

    function add(uint a, uint b) public pure returns(uint){
        return a + b;
    }
}
