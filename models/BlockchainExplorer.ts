import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { UrlSchema } from '../../generic/models/Url'
import { BlockchainNetworkSchema, BlockchainNetworkUidSchema } from './BlockchainNetwork'

export const BlockchainExplorerSchema = z.object({
  url: UrlSchema,
  addressExplorerUrlPattern: UrlSchema,
  transactionHashExplorerUrlPattern: UrlSchema,
  network: BlockchainNetworkSchema,
})

export const BlockchainExplorersSchema = z.array(BlockchainExplorerSchema)
  .superRefine(getDuplicatesRefinement('BlockchainExplorer', getBlockchainExplorerUid))

export const BlockchainExplorerUidSchema = z.object({
  network: BlockchainNetworkUidSchema,
})

export type BlockchainExplorer = z.infer<typeof BlockchainExplorerSchema>

export type BlockchainExplorerUid = z.infer<typeof BlockchainExplorerUidSchema>

export function validateBlockchainExplorer(explorer: BlockchainExplorer): BlockchainExplorer {
  return BlockchainExplorerSchema.parse(explorer)
}

export function validateBlockchainExplorers(explorers: BlockchainExplorer[]): BlockchainExplorer[] {
  return BlockchainExplorersSchema.parse(explorers)
}

export function getBlockchainExplorerUid(explorerUid: BlockchainExplorerUid) {
  return BlockchainExplorerUidSchema.parse(explorerUid)
}
