import { TransactionHash } from '../../../ethereum/models/TransactionHash'
import { replaceUrlPattern } from '../../../generic/models/UrlPattern/replaceUrlPattern'
import { BlockchainExplorer } from '../BlockchainExplorer'

export const getTransactionUrl = (explorer: BlockchainExplorer) => (hash: TransactionHash) => {
  return replaceUrlPattern(explorer.transactionHashExplorerUrlPattern, { hash })
}
