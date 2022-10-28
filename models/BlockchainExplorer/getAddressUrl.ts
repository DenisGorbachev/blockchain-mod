import { BlockchainExplorer } from '../BlockchainExplorer'
import { replaceUrlPattern } from '../../../generic/models/UrlPattern/replaceUrlPattern'
import { Address } from '../../../ethereum/models/Address'

export const getAddressUrl = (explorer: BlockchainExplorer) => (address: Address) => {
  return replaceUrlPattern(explorer.addressExplorerUrlPattern, { address })
}
