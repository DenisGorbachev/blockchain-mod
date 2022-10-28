import { z } from 'zod'
import { BlockchainNetworkSchema } from './BlockchainNetwork'
import { BlockchainAddressSchema } from './BlockchainAddress'

export const BlockchainContractSchema = z.object({
  address: BlockchainAddressSchema,
  network: BlockchainNetworkSchema,
  name: z.string().min(1),
})

export type BlockchainContract = z.infer<typeof BlockchainContractSchema>

export function addBlockchainContract($array: BlockchainContract[], $object: Partial<BlockchainContract>) {
  const object = BlockchainContractSchema.parse($object)
  const duplicate = $array.find(n => getBlockchainContractUid(n) === getBlockchainContractUid(object))
  if (duplicate) throw new Error(`Duplicate BlockchainContract: ${getBlockchainContractUid(duplicate)}`)
  $array.push(object)
  return object
}

export function getBlockchainContractUid(contract: BlockchainContract) {
  return `${contract.network.name}/${contract.address}`
}
