import { allNetworks } from '../../../finance/data/allNetworks'
import { getById } from '../../../generic/models/Id'
import { BlockchainNetwork } from '../BlockchainNetwork'

export function fromBlockchainNetworkToFinanceNetwork(network: BlockchainNetwork) {
  return getById(allNetworks, `Blockchain${network.id}`)
}
