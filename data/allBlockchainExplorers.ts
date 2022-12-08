import { trim } from 'lodash-es'
import { getFinder, getInserter } from 'libs/utils/zod'
import { BlockchainExplorer, BlockchainExplorerSchema, getBlockchainExplorerUid } from '../models/BlockchainExplorer'
import { BscMainnet, BscTestnet, EthMainnet, EthRopsten } from './allBlockchainNetworks'

export const allBlockchainExplorers: BlockchainExplorer[] = []

export const addBlockchainExplorer = getInserter('BlockchainExplorer', BlockchainExplorerSchema, getBlockchainExplorerUid, allBlockchainExplorers)

export const findBlockchainExplorer = getFinder(getBlockchainExplorerUid, allBlockchainExplorers)

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

export const BscscanMainnet = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://bscscan.io/',
  network: BscMainnet,
}))

export const BscscanTestnet = addBlockchainExplorer(withEtherscanStyleUrlPatterns({
  url: 'https://testnet.bscscan.com/',
  network: BscTestnet,
}))
