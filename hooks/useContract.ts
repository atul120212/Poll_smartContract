// hooks/useContract.ts
"use client"

import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"
import { useState } from "react"

export const usePollContract = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { data: pollDetails } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getPollDetails"
  })

  const { data: hasVoted } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "hasVoted"
  })

  const { writeContractAsync, data: hash, isPending, error } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  const voteA = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "voteA"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const voteB = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "voteB"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: {
      pollDetails,
      hasVoted
    },
    actions: { voteA, voteB },
    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error
    }
  }
}
