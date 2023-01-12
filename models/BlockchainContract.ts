import { z } from 'zod'
import { BlockchainAddressSchema } from './BlockchainAddress'
import { BlockchainNetworkSchema } from './BlockchainNetwork'

export const BlockchainContractSchema = z.object({
  address: BlockchainAddressSchema,
  network: BlockchainNetworkSchema,
  name: z.string().min(1),
})

export type BlockchainContract = z.infer<typeof BlockchainContractSchema>

export function getBlockchainContractUid(contract: BlockchainContract) {
  return `${contract.network.id}/${contract.address}`
}
