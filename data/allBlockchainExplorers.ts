import { getFinder, getInserter } from 'libs/utils/zod'
import { trim } from 'lodash-es'
import { BlockchainExplorer, BlockchainExplorerSchema, getBlockchainExplorerUid } from '../models/BlockchainExplorer'
import { BNBChainMainnet, BNBChainTestnet, EthGoerli, EthMainnet, EthRopsten } from './allBlockchainNetworks'
import { BlockchainNetwork, isEqualBlockchainNetwork } from '../models/BlockchainNetwork'
import { ensureFind } from '../../utils/ensure'

export const allBlockchainExplorers: BlockchainExplorer[] = []

export const addBlockchainExplorer = getInserter('BlockchainExplorer', BlockchainExplorerSchema, getBlockchainExplorerUid, allBlockchainExplorers)

export const findBlockchainExplorer = getFinder(getBlockchainExplorerUid, allBlockchainExplorers)

export const getBlockchainExplorerByNetwork = (network: BlockchainNetwork) => ensureFind(allBlockchainExplorers, e => isEqualBlockchainNetwork(e.network)(network))

function withEtherscanStyleUrlPatterns(explorer: Omit<BlockchainExplorer, 'addressExplorerUrlPattern' | 'transactionHashExplorerUrlPattern'>) {
  const explorerUrlTrimmed = trim(explorer.url, '/')
  return {
    ...explorer,
    addressExplorerUrlPattern: `${explorerUrlTrimmed}/address/{{address}}`,
    transactionHashExplorerUrlPattern: `${explorerUrlTrimmed}/tx/{{hash}}`,
  }
}

export const EtherscanMainnet = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://etherscan.io/',
  network: EthMainnet,
}))

export const EtherscanRopsten = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://ropsten.etherscan.io/',
  network: EthRopsten,
}))

export const EtherscanGoerli = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://goerli.etherscan.io/',
  network: EthGoerli,
}))

export const BscscanMainnet = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://bscscan.io/',
  network: BNBChainMainnet,
}))

export const BscscanTestnet = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://testnet.bscscan.com/',
  network: BNBChainTestnet,
}))
