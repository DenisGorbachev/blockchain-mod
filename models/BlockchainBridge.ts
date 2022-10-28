import { z } from 'zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { UrlSchema } from '../../generic/models/Url'
import { BlockchainNetworkSchema } from './BlockchainNetwork'
import { NotesSchema } from '../../generic/models/Notes'
import { Id } from '../../generic/models/Id'

export const BlockchainBridgeRouteSchema = z.object({
  from: BlockchainNetworkSchema,
  to: BlockchainNetworkSchema,
})

export const BlockchainBridgeSchema = z.object({
  url: UrlSchema,
  routes: z.array(BlockchainBridgeRouteSchema).default([]),
  notes: NotesSchema,
})

export const BlockchainBridgesSchema = z.array(BlockchainBridgeSchema)
  .superRefine(getDuplicatesRefinement('BlockchainBridge', getBlockchainBridgeUid))

export const BlockchainBridgeUidSchema = BlockchainBridgeSchema.pick({
  url: true,
})

export type BlockchainBridge = z.infer<typeof BlockchainBridgeSchema>

export type BlockchainBridgeUid = z.infer<typeof BlockchainBridgeUidSchema>

export function validateBlockchainBridge(bridge: BlockchainBridge): BlockchainBridge {
  return BlockchainBridgeSchema.parse(bridge)
}

export function validateBlockchainBridges(bridges: BlockchainBridge[]): BlockchainBridge[] {
  return BlockchainBridgesSchema.parse(bridges)
}

export function getBlockchainBridgeUid(bridgeUid: BlockchainBridgeUid) {
  return toUidFromSchema(bridgeUid, BlockchainBridgeUidSchema)
}
