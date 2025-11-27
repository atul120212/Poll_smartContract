# 🗳️ SimplePoll Smart Contract

A simple and beginner-friendly **Solidity-based polling system** where users can vote between two fixed options — **Option A** or **Option B**.  
No inputs are required during deployment, making it perfect for learning smart contracts, mappings, and basic voting logic on the blockchain.

---

## 📌 Project Description  
**SimplePoll** is a smart contract written in Solidity that allows users to cast a single vote for one of two predefined options.  
It ensures fairness by preventing double voting and stores all poll data on the blockchain.

---

## 🚀 What It Does  
- Creates a **fixed poll** with a question and two options.  
- Allows users to vote for either **Option A** or **Option B**.  
- Ensures each wallet address can vote **only once**.  
- Stores and displays the total votes for each option.  
- Provides a function to fetch complete poll details.

---

## ⭐ Features  
- 🔒 **No double voting** — uses `mapping(address => bool)`  
- 📝 **Preset poll details** — no constructor inputs required  
- 📊 **Accurate vote counting** on-chain  
- 👨‍💻 **Beginner-friendly and easy to deploy on Remix**  
- 🔍 **Getter function** to view poll status at any time  
- ⚡ Compatible with all EVM-based networks (Ethereum, Polygon, BSC, Avalanche, etc.)

---

## 🔗 Deployed Smart Contract  
**Contract Address:** `XXX`  
(Add your deployed address here after deployment)

---

## 📦 Smart Contract Code  
```solidity
//paste your code
