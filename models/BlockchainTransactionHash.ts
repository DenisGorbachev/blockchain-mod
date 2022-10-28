import { z } from 'zod'

export const BlockchainTransactionHashSchema = z.string().min(1)

export type BlockchainTransactionHash = z.infer<typeof BlockchainTransactionHashSchema>

export function validateBlockchainTransactionHash(blockchainTransactionHash: BlockchainTransactionHash): BlockchainTransactionHash {
  return BlockchainTransactionHashSchema.parse(blockchainTransactionHash)
}
