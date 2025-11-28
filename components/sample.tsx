// components/sample.tsx
"use client"

import { usePollContract } from "@/hooks/useContract"
import { useAccount } from "wagmi"

const SamplePoll = () => {
  const { isConnected } = useAccount()
  const { data, actions, state } = usePollContract()

  if (!isConnected)
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-3">Poll</h2>
          <p>Please connect your wallet to interact with the poll.</p>
        </div>
      </div>
    )

  const [question, optionA, optionB, votesA, votesB] = data.pollDetails || []

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">{question}</h1>

        <div className="space-y-3">
          <button
            onClick={actions.voteA}
            disabled={state.isLoading || data.hasVoted}
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg"
          >
            Vote for {optionA}
          </button>

          <button
            onClick={actions.voteB}
            disabled={state.isLoading || data.hasVoted}
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg"
          >
            Vote for {optionB}
          </button>

          {data.hasVoted && <p className="text-green-500 text-sm">You have already voted.</p>}
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Live Results</p>
          <p className="mt-2">{optionA}: {votesA?.toString()}</p>
          <p>{optionB}: {votesB?.toString()}</p>
        </div>

        {state.hash && (
          <div className="mt-6 p-4 border rounded-lg">
            <p className="text-xs uppercase">Transaction Hash</p>
            <p className="text-sm font-mono break-all">{state.hash}</p>
            {state.isConfirming && <p className="text-primary">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-green-500">Confirmed!</p>}
          </div>
        )}

        {state.error && (
          <div className="p-4 border border-red-500 text-red-500 rounded-lg">
            Error: {state.error.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default SamplePoll
