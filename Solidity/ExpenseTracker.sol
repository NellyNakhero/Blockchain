// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ExpenseTracker {
    struct Expense {
        address user;
        string description;
        uint amount;
    }

    Expense[] public expenses;

    constructor(){
        expenses.push(Expense(msg.sender, "Bus Fare", 200));
         expenses.push(Expense(msg.sender, "Food", 100));
          expenses.push(Expense(msg.sender, "Emergency", 500));
    }

    function addExpense(string memory _description, uint _amount) public {
        expenses.push(Expense(msg.sender, _description, _amount));
    }

    function getTotalExpenses(address _user) public  view returns (uint) {
        uint total = 0;
        for (uint i = 0; i < expenses.length; i++) {
            if (expenses[i].user == _user) {
                total += expenses[i].amount;
            }
        }
        return total;
    }
}