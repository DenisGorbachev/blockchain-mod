import { BlockchainNetwork } from '../BlockchainNetwork'
import { allNetworks } from '../../../finance/data/allNetworks'
import { getById } from '../../../generic/models/Id'

export function fromBlockchainNetworkToFinanceNetwork(network: BlockchainNetwork) {
  return getById(allNetworks, `Blockchain${network.id}`)
}
