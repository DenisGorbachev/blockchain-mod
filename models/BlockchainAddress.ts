import { z } from 'zod'

// TODO: Fix the type system: address must depend on network
export const BlockchainAddressSchema = z.string().min(16)

export type BlockchainAddress = z.infer<typeof BlockchainAddressSchema>
