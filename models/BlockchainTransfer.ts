import { z } from 'zod'
import { BlockchainNetworkSchema } from './BlockchainNetwork'
import { AmountSchema } from '../../finance/models/Amount'
import { TransferSchema } from '../../finance/models/Transfer'
import { BlockchainTransactionSchema } from './BlockchainTransaction'

export const BlockchainTransferSchema = TransferSchema.innerType().extend({
  transaction: BlockchainTransactionSchema,
})

export type BlockchainTransfer = z.infer<typeof BlockchainTransferSchema>
