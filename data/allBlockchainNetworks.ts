import { getInserter } from 'libs/utils/zod'
import { fromStringToId } from '../../generic/models/Id'
import { BlockchainNetwork, BlockchainNetworkSchema, getBlockchainNetworkUid } from '../models/BlockchainNetwork'

export const allBlockchainNetworks: BlockchainNetwork[] = []

export const addBlockchainNetwork = getInserter('BlockchainNetwork', BlockchainNetworkSchema, getBlockchainNetworkUid, allBlockchainNetworks)

export const addBlockchainNetworkD = (network: Omit<BlockchainNetwork, 'id'>) => addBlockchainNetwork({
  id: fromStringToId(`${network.family} ${network.label}`),
  ...network,
})

export const BtcMainnet = addBlockchainNetworkD({
  family: 'Bitcoin',
  label: 'Mainnet',
  symbol: 'BTC',
  isMainnet: true,
})

export const EthMainnet = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Mainnet',
  symbol: 'BTC',
  isMainnet: true,
})

export const EthRopsten = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Ropsten',
  symbol: 'rETH',
  isMainnet: false,
})

export const EthGoerli = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Goerli',
  symbol: 'gETH',
  isMainnet: false,
})

export const BnbMainnet = addBlockchainNetworkD({
  family: 'BNB Chain',
  label: 'Mainnet',
  symbol: 'BNB',
  isMainnet: true,
})

export const BscTestnet = addBlockchainNetworkD({
  family: 'BNB Chain',
  label: 'Testnet',
  symbol: 'tBNB',
  isMainnet: false,
})

export const XcadMainnet = addBlockchainNetworkD({
  family: 'XCAD',
  label: 'Mainnet',
  symbol: 'XCAD',
  isMainnet: true,
})

export const ChzMainnet = addBlockchainNetworkD({
  family: 'Chiliz',
  label: 'Mainnet',
  symbol: 'CHZ',
  isMainnet: true,
})

export const ZilMainnet = addBlockchainNetworkD({
  family: 'Ziliqa',
  label: 'Mainnet',
  symbol: 'ZIL',
  isMainnet: true,
})
