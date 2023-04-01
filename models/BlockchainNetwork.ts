import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { TickerSchema } from '../../finance/models/Ticker'
import { IdSchema } from '../../generic/models/Id'
import { NameSchema } from '../../generic/models/Name'
import { isEqualByDC } from '../../utils/lodash'

export const BlockchainNetworkSchema = z.object({
  id: IdSchema,
  parentId: IdSchema.optional(),
  family: NameSchema,
  label: NameSchema,
  symbol: TickerSchema,
  decimals: z.number().positive(),
  isMainnet: z.boolean(),
  isLocal: z.boolean(),
})

export const BlockchainNetworksSchema = z.array(BlockchainNetworkSchema)
  .superRefine(getDuplicatesRefinement('BlockchainNetwork', parseBlockchainNetworkUid))

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

export function parseBlockchainNetworkUid(networkUid: BlockchainNetworkUid) {
  return BlockchainNetworkUidSchema.parse(networkUid)
}

export const isEqualBlockchainNetwork = isEqualByDC(parseBlockchainNetworkUid)
