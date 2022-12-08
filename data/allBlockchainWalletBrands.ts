import { getFinder, getInserter, getName } from 'libs/utils/zod'
import { BlockchainWalletBrand, BlockchainWalletBrandSchema, parseBlockchainWalletBrandUid } from '../models/BlockchainWalletBrand'

export const allBlockchainWalletBrands: BlockchainWalletBrand[] = []

export const addBlockchainWalletBrand = getInserter(getName(BlockchainWalletBrandSchema), BlockchainWalletBrandSchema, parseBlockchainWalletBrandUid, allBlockchainWalletBrands)

export const findBlockchainWalletBrand = getFinder(parseBlockchainWalletBrandUid, allBlockchainWalletBrands)

export const Metamask = addBlockchainWalletBrand({
  url: 'https://metamask.io/',
  isHardware: true,
  isNonCustodial: true,
})

export const Ledger = addBlockchainWalletBrand({
  url: 'https://www.ledger.com/',
  isHardware: true,
  isNonCustodial: true,
})

export const Trezor = addBlockchainWalletBrand({
  url: 'https://trezor.io/',
  isHardware: true,
  isNonCustodial: true,
})

export const BlockchainCom = addBlockchainWalletBrand({
  url: 'https://www.blockchain.com/',
  isHardware: false,
  isNonCustodial: false,
})
