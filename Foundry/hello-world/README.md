## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

- It is a powerful platform designed for developers to build and deploy decentralized applications on ethereum blockchain.

- It is a comprehensive toolbox that provides all necessary tools and equipments to build, test and deploy decentralized applications efficiently.

- It includes main tools: `forge` , `cast` and `anvil`



Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).(used during building)

    - Initializes a new foundry project `forge init ... `
    - compiles solidity contracts `forge build ... `
    - Runs unit and fuzz tests to ensure contract reliability `forge test ...`
    - Deploys contracts to networks (testnets or mainnets) `forge create ...`

- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.(used to interact with deployed contract)

    - Sends transactions or call functions on smart contracts.
    - Queries blockchain data(contract state, balances etc)
    - Converts data formats(e.g hex to decimal).

- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.

    - simulates a full ethereum blockchain locally for fast testing.
    - provides instant transactions confirmation and customizable network settings.
    - supports debugging and fork testing.

- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```


# INHERITANCE

- Allows a contract to inherit properties and functions from another contract, enabling code reuse and modular design.
- The contract that inherits from another is called `derived contract` while the later is called the `base contract`.
- A derived contract inherits all the public and internal functions and state variables from a base contract.
- Contract A inherits from contract B using the `is` keyword.
- The function that is going to be overriden by a derived contract must be declared as `virtual` and the function that is going to veride the base function must use the keyword `override`.
- Solidity supports multiple inheritance including including polymorphism and its possible to call functions further up in the inheritance hierarchy internally by explicitely specifying the contract using `ContractName.functionName()` or using `super.functionName()` if you want to call the function one level higher up.