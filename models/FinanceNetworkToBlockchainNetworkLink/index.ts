import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema, getDuplicatesRefinement, getSchemaDescription } from 'libs/utils/zod'
import { z } from 'zod'
import { NetworkSchema, NetworkUidSchema, parseNetworkUid } from '../../../finance/models/Network'
import { BlockchainNetworkSchema, BlockchainNetworkUidSchema, parseBlockchainNetworkUid } from '../BlockchainNetwork'

export const FinanceNetworkToBlockchainNetworkLinkSchema = z.object({
  finance: NetworkSchema,
  blockchain: BlockchainNetworkSchema,
}).describe('FinanceNetworkToBlockchainNetworkLink')

export const FinanceNetworkToBlockchainNetworkLinkUidSchema = z.object({
  finance: NetworkUidSchema,
  blockchain: BlockchainNetworkUidSchema,
})

export const FinanceNetworkToBlockchainNetworkLinksSchema = getArraySchema(FinanceNetworkToBlockchainNetworkLinkSchema, parseFinanceNetworkToBlockchainNetworkLinkUid)
  .superRefine(getDuplicatesRefinement(getSchemaDescription(FinanceNetworkToBlockchainNetworkLinkSchema), l => parseNetworkUid(l.finance)))
  .superRefine(getDuplicatesRefinement(getSchemaDescription(FinanceNetworkToBlockchainNetworkLinkSchema), l => parseBlockchainNetworkUid(l.blockchain)))

export type FinanceNetworkToBlockchainNetworkLink = z.infer<typeof FinanceNetworkToBlockchainNetworkLinkSchema>

export type FinanceNetworkToBlockchainNetworkLinkUid = z.infer<typeof FinanceNetworkToBlockchainNetworkLinkUidSchema>

export function parseFinanceNetworkToBlockchainNetworkLink(link: FinanceNetworkToBlockchainNetworkLink): FinanceNetworkToBlockchainNetworkLink {
  return FinanceNetworkToBlockchainNetworkLinkSchema.parse(link)
}

export function parseFinanceNetworkToBlockchainNetworkLinks(links: FinanceNetworkToBlockchainNetworkLink[]): FinanceNetworkToBlockchainNetworkLink[] {
  return FinanceNetworkToBlockchainNetworkLinksSchema.parse(links)
}

export function parseFinanceNetworkToBlockchainNetworkLinkUid(linkUid: FinanceNetworkToBlockchainNetworkLinkUid): FinanceNetworkToBlockchainNetworkLinkUid {
  return FinanceNetworkToBlockchainNetworkLinkUidSchema.parse(linkUid)
}

export const isEqualFinanceNetworkToBlockchainNetworkLink = isEqualByDC(parseFinanceNetworkToBlockchainNetworkLinkUid)
