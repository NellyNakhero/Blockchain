# VULNERABILITIES

- Smart contracts are at the heart of blockchain transactions and their intergrity is essential to blockchain reliability and performance.

- Solidity smart contracts are susceptible to various vulnerabilities that can lead to significant financial losses and reputational damage.

- Some common vulnerabilities include: @TODO
    - Re-entracy attack: Occurs when an external contract is called before the original contract updates its state. This allos the attack to re-enter the contract in a loop, potentially draining funds.
    - Logic errors: Smart contracts may behave contrary to their intended logic and due to incorrect operators, boundary conditions or flawed algorithm implementation.
    - Integer overflows and underflows
    - Access control issues: Critical functions may lack proper access restrictions, allowing unauthorised users to execute priviledged operations.
    - Denial of service attacks: Attackers can block contract functionality by causing transactions to run out of gas or always revert.
    - Uninitialized storage pointers: Improperly initialized variables can point to unintended storage causing data corruption.
    - Frontrunning: Attackers can observe pending transactions and submit their own with higher gas prices to execute first, potentially profitting price movements or arbitrage opportunities.
    - Oracle manipulation: Reliance on centralized or manipulatable price feeds can allow attackers to manipulate on-chain logic, especially on  flash loans that can temporarily skew market prices.
    - Insecure randomness: Using predictable blockchain values like block.timestamp, block.number or blockhash for randomness allows attackers to predict outcomes.
    - unchecked external calls

## Why Smart Contracts Are Vulnerable
- Immutability: Once deployed, most smart contracts cannot be changed, locking in any bugs.
- public code: Contracts are often open-source, allowing attackers to study them for weaknesses.
- Financial Incentive: Smart contracts often manage large sums of crypto-currencies, making them prime targets.
- Complex Interactions: Contracts interact with other contracts, users and external data which increases risk.

# Best Practices
- Simplicity: Simplicity in smart contract development means writing concise focussed code that avoids unnecessary complexity. The more complex a contract, the larger is attack surface. Complex code increases the likelihood of bugs , makes auditing harder and raises gas costs. Keep code minimal to reduce attack surface.
- Expliciteness: Expliciteness ensures that the code is easy to understand & unambigous, reducing the chance of misinterpretation by developers, auditors and attackers. Ambigous logic such as unclear variable names or undocumented assumptions can lead to errors or exploitable vulnerabilities. Avoid ambigous logic; use clear variable names and comments.
- Modularity: Involves splitting smart contract into small, self-contained components that handle specific tasks. This approach reduces complexity, improves reusability and makes testing and auditing easier. Break contract into smaller, reusable contracts.
- Stay defensive: Assumes that all external inputs(wether from users, other contracts or oracles) could be malicious. This principles encourages multiple layers of security to protect against attacks like re-entracy, unauthrorized access or malicious data. By anticipating worst-case scenarios, developers can build robust contracts that withstand adversarial conditions.
- Continuous learning: Stay updated with solidity versions and evolving threats.


# SMART CONTRACT DEVELOPMENT TOOLS
- Remix: Is a browser based IDE designed for quick prototyping and debugging of solidity smart contracts.
- Hardhat: Is an advanced ethereum development environment that provides robust features for testing, debugging and deploying smart contracts.
- Foundry: is a fast, modular and extensible toolikit for ethereum application development emphasizing speed and flexibility with features like onfly compilation and gas optimization for efficient workflows.
- Scaffold Lisk: speciallized framework for building decentralised applications on lisk blockchain, providing pre-built react components, smart contract templates and integration tools to accelerate dApp development.