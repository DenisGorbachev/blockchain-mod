import { BlockchainNetwork } from '../BlockchainNetwork'

export function getBlockchainNetworkName(network: BlockchainNetwork) {
  return `${network.family} ${network.label}`
}
