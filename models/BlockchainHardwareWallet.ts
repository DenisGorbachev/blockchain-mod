import { isEqualByD } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { NameSchema } from '../../generic/models/Name'
import { BlockchainWalletBrandSchema, BlockchainWalletBrandUidSchema } from './BlockchainWalletBrand'

export const BlockchainHardwareWalletSchema = z.object({
  type: z.literal('hardware'),
  brand: BlockchainWalletBrandSchema,
  model: NameSchema,
}).describe('BlockchainHardwareWallet')

export const BlockchainHardwareWalletUidSchema = BlockchainHardwareWalletSchema.pick({
  type: true,
  model: true,
}).extend({
  brand: BlockchainWalletBrandUidSchema,
})

export const BlockchainHardwareWalletsSchema = getArraySchema(BlockchainHardwareWalletSchema, parseBlockchainHardwareWalletUid)

export type BlockchainHardwareWallet = z.infer<typeof BlockchainHardwareWalletSchema>

export type BlockchainHardwareWalletUid = z.infer<typeof BlockchainHardwareWalletUidSchema>

export function parseBlockchainHardwareWallet(wallet: BlockchainHardwareWallet): BlockchainHardwareWallet {
  return BlockchainHardwareWalletSchema.parse(wallet)
}

export function parseBlockchainHardwareWallets(wallets: BlockchainHardwareWallet[]): BlockchainHardwareWallet[] {
  return BlockchainHardwareWalletsSchema.parse(wallets)
}

export function parseBlockchainHardwareWalletUid(walletUid: BlockchainHardwareWalletUid): BlockchainHardwareWalletUid {
  return BlockchainHardwareWalletUidSchema.parse(walletUid)
}

export const isEqualBlockchainHardwareWallet = (a: BlockchainHardwareWallet) => (b: BlockchainHardwareWallet) => isEqualByD(a, b, parseBlockchainHardwareWalletUid)
