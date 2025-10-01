
# SOLIDITY

## What is Solidity

- Is a programming language that creates smart contracts and instructs them how to behave
- Solidity code once written gets compiled to bytecode which run on EVM

---

## What to build with solidity

* dApps
* Decentralized Social Media
* DAOs
* NFTs
* Crypto
* Games

dfn: A specific piece of code wrapped that should only execute when called

- Solidity: Is opne of the langiagexs used to write smart contracts
- File names are stored with extension `.sol`
- keyword contract is used to specify that the accompanying code is for a smart contract.

### Function Visibility Specifiers
- public: Visible externally and internally(creates a getter function for storage/state variables)
- private: Only visible in current contract
- external: Only visible externally(Only for functions) - i.e can only be a message-called via `this.func`
- internal: only visible internally

Functions that dont necessarily change state of a blockchain, ie they read data can have two keywords

    1. Pure: rejects modifying state and reject reading from state storage
    2. View: functionm marked with this basically just means that its only going to read state on the blockchain. When added, it reject any modification of state.

### Memory Storage & Calldata
- calldata : is a temporary variable that cant be modified
- memory: is a temporaray variable that can be modified
- storage: is a permanent variable that can be modified.