import { BlockchainNetwork, BlockchainNetworkSchema, getBlockchainNetworkUid } from '../models/BlockchainNetwork'
import { getInserter } from 'zenbox-util/zod'
import { withIdFromName } from '../../generic/models/Name/withIdFromName'

export const allBlockchainNetworks: BlockchainNetwork[] = []

export const addBlockchainNetwork = getInserter('BlockchainNetwork', BlockchainNetworkSchema, getBlockchainNetworkUid, allBlockchainNetworks)

export function isEqualBlockchainNetwork(a: BlockchainNetwork, b: BlockchainNetwork) {
  return getBlockchainNetworkUid(a) === getBlockchainNetworkUid(b)
}

export const BtcMainnet = addBlockchainNetwork(withIdFromName({
  name: 'Bitcoin Mainnet',
  symbol: 'BTC',
  isMainnet: true,
}))

export const EthMainnet = addBlockchainNetwork(withIdFromName({
  name: 'Ethereum Mainnet',
  symbol: 'BTC',
  isMainnet: true,
}))

export const EthRopsten = addBlockchainNetwork(withIdFromName({
  name: 'Ethereum Ropsten',
  symbol: 'rETH',
  isMainnet: false,
}))

export const BscMainnet = addBlockchainNetwork(withIdFromName({
  name: 'Binance Smart Chain Mainnet',
  symbol: 'BNB',
  isMainnet: true,
}))

export const BscTestnet = addBlockchainNetwork(withIdFromName({
  name: 'Binance Smart Chain Testnet',
  symbol: 'tBNB',
  isMainnet: false,
}))
