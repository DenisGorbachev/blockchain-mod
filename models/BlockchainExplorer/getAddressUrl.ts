import { Address } from '../../../ethereum/models/Address'
import { replaceUrlPattern } from '../../../generic/models/UrlPattern/replaceUrlPattern'
import { BlockchainExplorer } from '../BlockchainExplorer'

export const getAddressUrl = (explorer: BlockchainExplorer) => (address: Address) => {
  return replaceUrlPattern(explorer.addressExplorerUrlPattern, { address })
}
