import { Address } from '../../../ethereum/models/Address'
import { fromTemplateToString } from '../../../utils/string/fromTemplateToString'
import { BlockchainExplorer } from '../BlockchainExplorer'

export const getAddressUrl = (explorer: BlockchainExplorer) => (address: Address) => {
  return fromTemplateToString(explorer.addressExplorerUrlPattern, { address })
}
