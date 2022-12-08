import { isEqualByD } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { BlockchainWalletBrandSchema, BlockchainWalletBrandUidSchema } from './BlockchainWalletBrand'

export const BlockchainSoftwareWalletSchema = z.object({
  type: z.literal('software'),
  brand: BlockchainWalletBrandSchema,
}).describe('BlockchainSoftwareWallet')

export const BlockchainSoftwareWalletUidSchema = BlockchainSoftwareWalletSchema.pick({
  type: true,
}).extend({
  brand: BlockchainWalletBrandUidSchema,
})

export const BlockchainSoftwareWalletsSchema = getArraySchema(BlockchainSoftwareWalletSchema, parseBlockchainSoftwareWalletUid)

export type BlockchainSoftwareWallet = z.infer<typeof BlockchainSoftwareWalletSchema>

export type BlockchainSoftwareWalletUid = z.infer<typeof BlockchainSoftwareWalletUidSchema>

export function parseBlockchainSoftwareWallet(wallet: BlockchainSoftwareWallet): BlockchainSoftwareWallet {
  return BlockchainSoftwareWalletSchema.parse(wallet)
}

export function parseBlockchainSoftwareWallets(wallets: BlockchainSoftwareWallet[]): BlockchainSoftwareWallet[] {
  return BlockchainSoftwareWalletsSchema.parse(wallets)
}

export function parseBlockchainSoftwareWalletUid(walletUid: BlockchainSoftwareWalletUid): BlockchainSoftwareWalletUid {
  return BlockchainSoftwareWalletUidSchema.parse(walletUid)
}

export const isEqualBlockchainSoftwareWallet = (a: BlockchainSoftwareWallet) => (b: BlockchainSoftwareWallet) => isEqualByD(a, b, parseBlockchainSoftwareWalletUid)
