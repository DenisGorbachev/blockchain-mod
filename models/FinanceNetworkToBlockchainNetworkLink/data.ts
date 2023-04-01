import { getFinder, getInserter, getName } from 'libs/utils/zod'
import { BlockchainBNBChainMainnet, BlockchainEthereumMainnet } from '../../../finance/data/allNetworks'
import { BNBChainMainnet, EthereumMainnet } from '../../data/allBlockchainNetworks'
import { FinanceNetworkToBlockchainNetworkLink, FinanceNetworkToBlockchainNetworkLinkSchema, parseFinanceNetworkToBlockchainNetworkLinkUid } from './index'

export const allFinanceNetworkToBlockchainNetworkLinks: FinanceNetworkToBlockchainNetworkLink[] = []

export const addFinanceNetworkToBlockchainNetworkLink = getInserter(getName(FinanceNetworkToBlockchainNetworkLinkSchema), FinanceNetworkToBlockchainNetworkLinkSchema, parseFinanceNetworkToBlockchainNetworkLinkUid, allFinanceNetworkToBlockchainNetworkLinks)

export const findFinanceNetworkToBlockchainNetworkLink = getFinder(parseFinanceNetworkToBlockchainNetworkLinkUid, allFinanceNetworkToBlockchainNetworkLinks)

addFinanceNetworkToBlockchainNetworkLink({
  finance: BlockchainEthereumMainnet,
  blockchain: EthereumMainnet,
})

addFinanceNetworkToBlockchainNetworkLink({
  finance: BlockchainBNBChainMainnet,
  blockchain: BNBChainMainnet,
})
