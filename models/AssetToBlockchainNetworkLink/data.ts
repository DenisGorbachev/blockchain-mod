import { getFinder, getInserter, getName } from 'libs/utils/zod'
import { BNB, BTC, ETH } from '../../../finance/data/allAssets'
import { BitcoinMainnet, BNBChainMainnet, EthereumMainnet } from '../../data/allBlockchainNetworks'
import { AssetToBlockchainNetworkLink, AssetToBlockchainNetworkLinkSchema, parseAssetToBlockchainNetworkLinkUid } from './index'

export const allAssetToBlockchainNetworkLinks: AssetToBlockchainNetworkLink[] = []

export const addAssetToBlockchainNetworkLink = getInserter(getName(AssetToBlockchainNetworkLinkSchema), AssetToBlockchainNetworkLinkSchema, parseAssetToBlockchainNetworkLinkUid, allAssetToBlockchainNetworkLinks)

export const findAssetToBlockchainNetworkLink = getFinder(parseAssetToBlockchainNetworkLinkUid, allAssetToBlockchainNetworkLinks)

addAssetToBlockchainNetworkLink({
  asset: ETH,
  network: EthereumMainnet,
})

addAssetToBlockchainNetworkLink({
  asset: BTC,
  network: BitcoinMainnet,
})

addAssetToBlockchainNetworkLink({
  asset: BNB,
  network: BNBChainMainnet,
})
