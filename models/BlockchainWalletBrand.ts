import { isEqualByD } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { UrlSchema } from '../../generic/models/Url'

export const BlockchainWalletBrandSchema = z.object({
  url: UrlSchema,
  isHardware: z.boolean(),
  isNonCustodial: z.boolean(),
}).describe('BlockchainWalletBrand')

export const BlockchainWalletBrandsSchema = getArraySchema(BlockchainWalletBrandSchema, parseBlockchainWalletBrandUid)

export const BlockchainWalletBrandUidSchema = BlockchainWalletBrandSchema.pick({
  url: true,
})

export type BlockchainWalletBrand = z.infer<typeof BlockchainWalletBrandSchema>

export type BlockchainWalletBrandUid = z.infer<typeof BlockchainWalletBrandUidSchema>

export function parseBlockchainWalletBrand(brand: BlockchainWalletBrand): BlockchainWalletBrand {
  return BlockchainWalletBrandSchema.parse(brand)
}

export function parseBlockchainWalletBrands(brands: BlockchainWalletBrand[]): BlockchainWalletBrand[] {
  return BlockchainWalletBrandsSchema.parse(brands)
}

export function parseBlockchainWalletBrandUid(brandUid: BlockchainWalletBrandUid): BlockchainWalletBrandUid {
  return BlockchainWalletBrandUidSchema.parse(brandUid)
}

export const isEqualBlockchainWalletBrand = (a: BlockchainWalletBrand) => (b: BlockchainWalletBrand) => isEqualByD(a, b, parseBlockchainWalletBrandUid)
