# SecurePiggyBank Audit

This repository contains a security audit and patch for a vulnerable smart contract `VulnerablePiggyBank.sol`.

It also includes an attack contract that attempts to exploit the vulnerability `Attacker.sol`.

And  a secure version of the piggy bank `SecurePiggyBank.sol`.


## 🔍 Vulnerabilities in VulnerablePiggyBank:

1. Missing access control in withdraw():
    
    Any address can call withdraw() and drain the entrire balance.

    Funds are not protected with no only owner modifier or similar logic.

2. The constructor is missing a semi-colon

    constructor() { owner = msg.sender } is syntactically incorrect, due to missing semi-colon

3. No protection against re-entracy

    The withdraw logic is vulnerable to re-entracy


## How to Simulate the Attack

The Attacker contract exploits the public withdraw() function in the VulnerablePiggyBank since there are norestrictions.

1. Deploy the VulnerablePiggyBank
2. Fund it with some ETH using deposit
3. Deploy Attacker contract with the address of VulnerablePiggyBank
4. Call attack() on the Attacker contract
5. Funds get transferred from PiggyBank to Attacker's address


## Fixes in `SecurePiggyBank.sol`

- Added onlyOwner modifier to restrict withdrawals to just the contract owner.
- Corrected the syntax error on the constructor.
- Removed unused `attack()` function