## s

### BITCOIN [https://bitcoin.org/bitcoin.pdf](Store of value)

- Is a peer to peer version of electronic cash, that would allow online payments to be sent directly from one party to another without going through a financial institution. Bitcoin uses network timestamps transactions by hashing them into ongoing chain of hash-based proof of work, forming a record that cannot be changed without redoing the proof-of-work.
- The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from largest pool of CPU power.
- Hence, as long as majority of CPU power are controlled by nodes that are not cooperating to attack the network, they'll fenerate longest chain and outpace the attackers.
- Messages are broadcast on best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.
- This is what formed blockchain, and its the same technology that ethereum adopted.

---

### ETHEREUM(Store of value and utility to facilitate decentralized agreements)

- Not only performs decentralized transactions processing, but also equally, smart contracts(decentralized contracts)

---

### SMART CONTRACTS

- Are a set of instructions executed and deployed(in a decentralized blockchain) in a decentralized way, without the need of a centralized or third party intermediary.

(Nick Szabo)

- Is a computerized transaction protocol, that executes the terms of a contract.
- The general objective of a smart contract design are to satisfy common contractual conditions(such as payment terms, liens, confidentiality and even enforcement), minimize exeptions both malicius and accidental, and minimise need for  trusted intermediary.
- thus, lowering fraud and reducing arbitrary and enforcement cost and many other costs, removes centralized forces & third party risks.
- they create verifiable trust minimized agreements which give rise to unbreakable promises.

- Once a smart contract is deployed it cannot be altered(immutable), automatically executes, and everyone can see the terms of the agreement.

#### Features of smart contracts

1. Decentralized
2. Transaparency & Flexibility
3. Speed & Efficiency
4. Security and immutability
5. Counter-party risk removal
6. Trust minimized agreements

#### The Purpose Of Smart Contracts

- Meant to solve society's trust issues by(Doing the right thing is infrastructural)
    - bringing transaparency into agreements
    - Reduce counterpaty risk by removig intermrdiaries.
    - Immutable agreement rules

---

### The Oracle Problem
- Is any device or entity that connects a deterministic blockchain with offchain data.

---

### HYBRID SMART CONTRACTS(Onchain + offchain agreements)
- O

---

### Layer 1 (e.g Bitcoin, Ethereum, Avalanche)

- Base layer of a blockchain implementation

---

### Layer 2( - e.g chainlink, arbitrum, optimism)

- Any network/application built on top of layer 1
- Meant to solve scalability issues of the main blockchain(ethereum)

NB: Arbitrum & Optimism as L2 that also look to solve scalability issue, they are what is known as rollups. They roll up their transactions into a L1. They are different from sidecahins, because sidechains derive their security from their own protocols, rollups derive their security from base layer.
Sharding and rollups are scalability solutions on L1s


#### Blockchain Rollup

- Scaling solutions that increases the number of transactions on the L1 chain.
- This is achieved by rolling up mutiple transactions into one.


##### Types of L2

1. Optimistic Rollup
    - Assumes transactions are legitimate by default.
    - Operators can propose what they believe to be the valid state of the rollup chain.
    - Then challenge period window opens during which operators can challenge the rollup transaction.
    - Operators can send a challenge by providing a fraud proof to verify correctness in case of a dispute.
    - The operators engage in a call and challenge game until they narrow down the dispute to a single computational step.
    - The single computational step is executed on the L1

2. Zero Knowledge Rollups
    - Use validity or zk proof(are complex mathematical cryptographic problem) to verify transaction correcteness.
    - zk proof involve two participants:
        - prover: The entity that tries to prove they know something.
        - verifier(useually L1 contract): The netity verifying that the prover does infact know the answer to the problem.
        - witness: the answer to the problem


***

https://www.cyfrin.io/blog/what-are-blockchain-rollups-a-full-guide-to-zk-and-optimistic-rollups

***

---

### dApps = Decentralized Applications = Decentralized protocol = Smart contracts

---

### Web3
- The permisionless web, with dynamic content where decentralized censorship resistant network run smart agreements and code. 
- Its generally accompanied by the idea of user owned ecosystems, where the protocol you interact with, you also own a potion of, instead of solely being the product.

---

### Decentralized blockchain

---

### Decentralized exchanges

___

### Node Operators

---

### EVM

---

### GAS

- Is a unit of computational measurment.
- Gas fee is paid by whoever initialized the transaction.

---

### Transaction Fee

tx = gas price * gas used

---

### Hash

- A unique fixed length string, meant to identify a piece of data.
- They are created by placing said data into a hash function.
- Ethereum uses Keccak256 algorithm for hashing.
- To simulate hashing algorithm on blockchain (https://andersbrownworth.com/blockchain/blockchain)

---

### Mining

- Is the process of finding the "solution" to the blockchain problem.
- Nodes get paid for mining blocks

---

### Block

- A list of transactions mined together(transactions + nonce + block + hash of prev block = Hash)

---

### Nonce

- A number used once to find the solution to the blockchain problem.
- Its also used to define the transaction number for an account/address.

---

### Private Key

- Used to sign transactions
- Eth & btc uses elliptic curve digital signature algorithm to sign transactions.

---

### Public Key

- Its derived from private key and anyone can see it, and use it to verify that a transaction came from the actual sender.

---

### Signing Transactions

- Is a one way process where anyone with private key can sign a transaction by their private key being hashed with their transaction data.
- Anyone can verify this transaction with your public key.

---

### Node
- A single instance of a decentralised network.
- Blockchain nodes keeps a full list of the transactions that occur.

---

### Consensus

- Is the mechanism used to agree on the state of a blockchain.

There are two pieces of consensus

1. Chain selection Algorithm

2. Sybil Resistance Mechanism (e.g Proof Of Work (POW))

- Bitcoin uses nakamoto consensus as its consensus algorith. the nakamoto consus basically is longest chain + PoW

---

### Proof Of Work

- has miners

---

### Proof of Stake

- As of 2022, ETH is proof of stake
- Has validators(They validate other nodes)

---

### Block confirmations

- Is the number of additional blocks added on after a transaction went through in a blockchain

---

### Attacks that could happen in blockchain

- Sybil Attack: Use creates multiple pseudo anonymous accounts with intention of being able to influence a network. Are prevented by PoW & PoS
- 51% Attack: If someone has the longest chain and have more than 51% of the rest of the network, they can fork the network and bring the network to their longest chain. The bigger the blockchain, the more its resistant to these attacks.

--- 

### Blockchain Scalability problem

- They arent always enough block space in block for the amount of transactions that want to get in them. Only so many transactions can fit ain a block. 
- This leads to very high gas prices(- How much it costs to interact with blockchain.).