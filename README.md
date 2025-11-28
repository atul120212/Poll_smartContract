# README.md

# 🗳️ Simple Poll DApp (Flare Coston2 Testnet)

## **Contract Address**

`0x5D61543792a5d11FA80Ea7aEC8256f6ce8f3bb0a`  
Explorer: https://coston2-explorer.flare.network/address/0x5D61543792a5d11FA80Ea7aEC8256f6ce8f3bb0a

<img width="2521" height="1184" alt="image" src="https://github.com/user-attachments/assets/86cd7974-fab3-4582-8b27-c071fc3a87ff" />


---

## **Deployed App**

Explore it here: https://poll-flare-smart-contract.vercel.app/

---
## 📌 **Project Overview**

This project is a decentralized polling/voting application built on the **Flare Coston2 Testnet**.  
It enables users to vote on a predefined poll stored fully on-chain. The DApp provides a clean UI, wallet-gated access, and live updates on poll results directly from the blockchain.

---

## 🎯 **Purpose**

Many voting systems rely on centralized databases that can be manipulated or obscured.  
This project solves that by allowing **transparent, immutable, and trustless voting** using a smart contract.

Users can vote only once, and all poll data — question, options, and live results — is fully stored and retrieved from the blockchain.

---

## 🚀 **Features**

### ✅ **On-Chain Poll**

- Predefined question and two options (Option A & Option B)
- Poll data permanently stored on the blockchain

### 🗳️ **Voting**

- Users can vote once per wallet
- `voteA()` and `voteB()` smart contract functions
- Automated UI disabling after vote is cast

### 📊 **Live Results**

- Live vote counts pulled via `getPollDetails()`
- No backend or database required

### 🔒 **Wallet Gated**

- Uses **Wagmi + Viem** to detect wallet connection
- UI unlocks automatically after wallet is connected

### ⚡ **Real-Time Transaction Feedback**

- Transaction hash
- Confirmation status
- Error handling
- Loading state

### 🎨 **Clean Next.js UI**

- Responsive design
- Smooth UX
- Clear status indicators

---

## 🧠 **How It Solves the Problem**

### 🔍 **The Problem**

Traditional polls suffer from:

- Lack of transparency
- Double voting
- Manipulation by the poll owner
- No public verification
- Reliance on centralized services

### 🛠️ **The Solution**

This DApp provides:

- **Immutable votes** thanks to blockchain consensus
- **One user = one vote**, enforced via wallet address
- **Full transparency**: Every vote is on-chain and publicly traceable
- **Decentralized verification**: Anyone can confirm vote counts
- **Open-source UI + contract** ensuring end-to-end trust

### 🌐 **Use Cases**

- Community decision-making
- DAO proposals
- Transparent public voting
- Social media polls backed by blockchain
- Micro-governance inside apps or communities

---

## 🧩 **Tech Stack**

- **Next.js / React**
- **TypeScript**
- **Wagmi + Viem**
- **Flare Coston2 Testnet**
- **Smart Contract (Solidity)**

---

## 📁 **Repository Contains**

- `lib/contract.ts` → Contract ABI & address
- `hooks/useContract.ts` → Hook for interacting with contract
- `components/sample.tsx` → Poll UI
- `README.md` → Documentation

---

## 📞 Support

If you need improvements, UI redesign, or deployment help — feel free to ask!

---
