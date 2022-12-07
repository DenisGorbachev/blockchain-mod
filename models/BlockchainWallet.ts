import { isEqualByD } from 'zenbox-util/lodash'
import { getArraySchema } from 'zenbox-util/zod'
import { z } from 'zod'
import { BlockchainHardwareWalletSchema, BlockchainHardwareWalletUidSchema } from './BlockchainHardwareWallet'
import { BlockchainSoftwareWalletSchema, BlockchainSoftwareWalletUidSchema } from './BlockchainSoftwareWallet'

export const BlockchainWalletSchema = z.discriminatedUnion('type', [
  BlockchainHardwareWalletSchema,
  BlockchainSoftwareWalletSchema,
]).describe('BlockchainWallet')

export const BlockchainWalletUidSchema = z.discriminatedUnion('type', [
  BlockchainHardwareWalletUidSchema,
  BlockchainSoftwareWalletUidSchema,
]).describe('BlockchainWallet')

export const BlockchainWalletsSchema = getArraySchema(BlockchainWalletSchema, parseBlockchainWalletUid)

export type BlockchainWallet = z.infer<typeof BlockchainWalletSchema>

export type BlockchainWalletUid = z.infer<typeof BlockchainWalletUidSchema>

export function parseBlockchainWallet(wallet: BlockchainWallet): BlockchainWallet {
  return BlockchainWalletSchema.parse(wallet)
}

export function parseBlockchainWallets(wallets: BlockchainWallet[]): BlockchainWallet[] {
  return BlockchainWalletsSchema.parse(wallets)
}

export function parseBlockchainWalletUid(walletUid: BlockchainWalletUid): BlockchainWalletUid {
  return BlockchainWalletUidSchema.parse(walletUid)
}

export const isEqualBlockchainWallet = (a: BlockchainWallet) => (b: BlockchainWallet) => isEqualByD(a, b, parseBlockchainWalletUid)
