import { BlockchainExplorer, BlockchainExplorerSchema, getBlockchainExplorerUid } from '../models/BlockchainExplorer'
import { getFinder, getInserter } from 'zenbox-util/zod'
import { BscMainnet, BscTestnet, EthMainnet, EthRopsten } from './allBlockchainNetworks'
import { trim } from 'lodash-es'

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
