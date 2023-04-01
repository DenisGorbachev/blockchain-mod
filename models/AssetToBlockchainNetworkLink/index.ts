import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { AssetSchema, AssetUidSchema } from '../../../finance/models/Asset'
import { BlockchainNetworkSchema, BlockchainNetworkUidSchema } from '../BlockchainNetwork'

export const AssetToBlockchainNetworkLinkSchema = z.object({
  asset: AssetSchema,
  network: BlockchainNetworkSchema,
}).describe('AssetToBlockchainNetworkLink')

export const AssetToBlockchainNetworkLinkUidSchema = z.object({
  asset: AssetUidSchema,
  network: BlockchainNetworkUidSchema,
})

export const AssetToBlockchainNetworkLinksSchema = getArraySchema(AssetToBlockchainNetworkLinkSchema, parseAssetToBlockchainNetworkLinkUid)

export type AssetToBlockchainNetworkLink = z.infer<typeof AssetToBlockchainNetworkLinkSchema>

export type AssetToBlockchainNetworkLinkUid = z.infer<typeof AssetToBlockchainNetworkLinkUidSchema>

export function parseAssetToBlockchainNetworkLink(link: AssetToBlockchainNetworkLink): AssetToBlockchainNetworkLink {
  return AssetToBlockchainNetworkLinkSchema.parse(link)
}

export function parseAssetToBlockchainNetworkLinks(links: AssetToBlockchainNetworkLink[]): AssetToBlockchainNetworkLink[] {
  return AssetToBlockchainNetworkLinksSchema.parse(links)
}

export function parseAssetToBlockchainNetworkLinkUid(linkUid: AssetToBlockchainNetworkLinkUid): AssetToBlockchainNetworkLinkUid {
  return AssetToBlockchainNetworkLinkUidSchema.parse(linkUid)
}

export const isEqualAssetToBlockchainNetworkLink = isEqualByDC(parseAssetToBlockchainNetworkLinkUid)
