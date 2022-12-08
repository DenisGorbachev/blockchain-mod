import { z } from 'zod'
import { toUidFromSchema } from 'libs/utils/uid'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { TickerSchema } from '../../finance/models/Ticker'
import { IdSchema } from '../../generic/models/Id'

export const BlockchainNetworkSchema = z.object({
  id: IdSchema,
  name: z.string().min(1),
  symbol: TickerSchema,
  isMainnet: z.boolean(),
})

export const BlockchainNetworksSchema = z.array(BlockchainNetworkSchema)
  .superRefine(getDuplicatesRefinement('BlockchainNetwork', getBlockchainNetworkUid))

export const BlockchainNetworkUidSchema = BlockchainNetworkSchema.pick({
  id: true,
})

export type BlockchainNetwork = z.infer<typeof BlockchainNetworkSchema>

export type BlockchainNetworkUid = z.infer<typeof BlockchainNetworkUidSchema>

export function validateBlockchainNetwork(network: BlockchainNetwork): BlockchainNetwork {
  return BlockchainNetworkSchema.parse(network)
}

export function validateBlockchainNetworks(networks: BlockchainNetwork[]): BlockchainNetwork[] {
  return BlockchainNetworksSchema.parse(networks)
}

export function getBlockchainNetworkUid(networkUid: BlockchainNetworkUid) {
  return toUidFromSchema(networkUid, BlockchainNetworkUidSchema)
}
