import { z } from 'zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { BlockchainNetworkSchema, BlockchainNetworkUidSchema } from './BlockchainNetwork'
import { BlockchainTransactionHashSchema } from './BlockchainTransactionHash'
import { AmountSchema } from '../../finance/models/Amount'
import { BlockchainAddressSchema } from './BlockchainAddress'

export const BlockchainTransactionSchema = z.object({
  network: BlockchainNetworkSchema,
  hash: BlockchainTransactionHashSchema,
  from: BlockchainAddressSchema,
  to: BlockchainAddressSchema,
  amount: AmountSchema,
})

export const BlockchainTransactionsSchema = z.array(BlockchainTransactionSchema)
  .superRefine(getDuplicatesRefinement('BlockchainTransaction', getBlockchainTransactionUid))

export const BlockchainTransactionUidSchema = z.object({
  network: BlockchainNetworkUidSchema,
  hash: BlockchainTransactionSchema.shape.hash,
})

export type BlockchainTransaction = z.infer<typeof BlockchainTransactionSchema>

export type BlockchainTransactionUid = z.infer<typeof BlockchainTransactionUidSchema>

export function validateBlockchainTransaction(transaction: BlockchainTransaction): BlockchainTransaction {
  return BlockchainTransactionSchema.parse(transaction)
}

export function validateBlockchainTransactions(transactions: BlockchainTransaction[]): BlockchainTransaction[] {
  return BlockchainTransactionsSchema.parse(transactions)
}

export function getBlockchainTransactionUid(transactionUid: BlockchainTransactionUid) {
  return toUidFromSchema(transactionUid, BlockchainTransactionUidSchema)
}
