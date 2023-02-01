import { TransactionHash } from '../../../ethereum/models/TransactionHash'
import { fromTemplateToString } from '../../../utils/string/fromTemplateToString'
import { BlockchainExplorer } from '../BlockchainExplorer'

export const getTransactionUrl = (explorer: BlockchainExplorer) => (hash: TransactionHash) => {
  return fromTemplateToString(explorer.transactionHashExplorerUrlPattern, { hash })
}
