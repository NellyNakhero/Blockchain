// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Calculator {
    uint256 public result = 0;

    function add(uint256 a, uint256 b) public {
        result = a + b;
    }

    function subtract(uint256 num) public {
        result -= num;
    }

    function multiply(uint256 num) public {
        result *= num;
    }

    function get() public view returns (uint256) {
        return result;
    }
}


library StringUtils {
    function compareStrings(string memory _a, string memory _b) internal pure returns(bool) {
        return keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b));
    }
}


contract AdvancedCalculator is Calculator {
    using StringUtils for string;

    function multiply(uint256 a, uint256 b) internal{
        result = a * b;
    }

    function perform(uint256 a, uint256 b, string memory operation) public {
        if(StringUtils.compareStrings(operation, "+")) add(a, b);
    }
}