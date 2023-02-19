import { getInserter } from 'libs/utils/zod'
import { fromStringToId } from '../../generic/models/Id'
import { ensureFind } from '../../utils/ensure'
import { todo } from '../../utils/todo'
import { BlockchainNetwork, BlockchainNetworkSchema, getBlockchainNetworkUid } from '../models/BlockchainNetwork'

export const allBlockchainNetworks: BlockchainNetwork[] = []

export const addBlockchainNetwork = getInserter('BlockchainNetwork', BlockchainNetworkSchema, getBlockchainNetworkUid, allBlockchainNetworks)

export const addBlockchainNetworkD = (network: Omit<BlockchainNetwork, 'id' | 'isLocal'>) => addBlockchainNetwork({
  id: fromStringToId(`${network.family} ${network.label}`),
  isLocal: false,
  ...network,
})

export const getParent = (network: BlockchainNetwork) => ensureFind(allBlockchainNetworks, parent => network.parentId === parent.id)

export const BtcMainnet = addBlockchainNetworkD({
  family: 'Bitcoin',
  label: 'Mainnet',
  symbol: 'BTC',
  decimals: 8,
  isMainnet: true,
})

export const EthMainnet = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Mainnet',
  symbol: 'ETH',
  decimals: 18,
  isMainnet: true,
})

export const EthRopsten = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Ropsten',
  symbol: 'rETH',
  decimals: 18,
  isMainnet: false,
})

export const EthRinkeby = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Rinkeby',
  symbol: 'rETH',
  decimals: 18,
  isMainnet: false,
})

export const EthGoerli = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Goerli',
  symbol: 'gETH',
  decimals: 18,
  isMainnet: false,
})

export const EthHardhat = addBlockchainNetworkD({
  family: 'Ethereum',
  label: 'Hardhat',
  symbol: 'ETH',
  decimals: 18,
  isMainnet: true,
})

export const BNBChainMainnet = addBlockchainNetworkD({
  family: 'BNB Chain',
  label: 'Mainnet',
  symbol: 'BNB',
  decimals: 18,
  isMainnet: true,
})

export const BNBChainTestnet = addBlockchainNetworkD({
  family: 'BNB Chain',
  label: 'Testnet',
  symbol: 'tBNB',
  decimals: 18,
  isMainnet: false,
})

export const CantoMainnet = addBlockchainNetworkD({
  family: 'Canto',
  label: 'Mainnet',
  symbol: 'CANTO',
  decimals: 18,
  isMainnet: true,
})

export const CantoTestnet = addBlockchainNetworkD({
  family: 'Canto',
  label: 'Testnet',
  symbol: 'tCANTO',
  decimals: 18,
  isMainnet: false,
})

export const XcadMainnet = addBlockchainNetworkD({
  family: 'XCAD',
  label: 'Mainnet',
  symbol: 'XCAD',
  decimals: todo(18),
  isMainnet: true,
})

export const ChzMainnet = addBlockchainNetworkD({
  family: 'Chiliz',
  label: 'Mainnet',
  symbol: 'CHZ',
  decimals: todo(18),
  isMainnet: true,
})

export const ZilMainnet = addBlockchainNetworkD({
  family: 'Ziliqa',
  label: 'Mainnet',
  symbol: 'ZIL',
  decimals: todo(18),
  isMainnet: true,
})

export const ArbitrumMainnet = addBlockchainNetworkD({
  family: 'Arbitrum',
  label: 'Mainnet',
  parentId: EthMainnet.id,
  symbol: 'ETH',
  decimals: 18,
  isMainnet: true,
})
