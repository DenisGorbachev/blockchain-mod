import { z } from 'zod'
import { toUidFromSchema } from 'libs/utils/uid'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { BlockchainNetworkSchema, BlockchainNetworkUidSchema } from './BlockchainNetwork'
import { UrlSchema } from '../../generic/models/Url'
import { Id } from '../../generic/models/Id'

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
  return toUidFromSchema(explorerUid, BlockchainExplorerUidSchema)
}
