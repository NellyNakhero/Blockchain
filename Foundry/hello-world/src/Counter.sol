// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract A {
    //state variables
    string public name;
    string public city;

    constructor(string memory _name, string memory _city) {
        name = _name;
        city = _city;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function setCity(string memory _city) public {
        city = _city;
    }

    function doSomething() public virtual returns (string memory){
        return "Doing something in base contract";
    }

}

contract B is A {
    constructor(string memory _name, string memory _city) A("Nelly", "Kiligi"){}

    function getName() public view returns (string memory) {
        return name;
    }

    function setCity(string memory _city) public override  {
        city = _city
    }
}
