import { z } from 'zod'
import { BlockchainContractSchema } from './BlockchainContract'

export const BlockchainContractPageSchema = z.object({
  url: z.string().url().min(1),
  contract: BlockchainContractSchema,
  isSourceCodeVerified: z.boolean().default(false),
})

export type BlockchainContractPage = z.infer<typeof BlockchainContractPageSchema>
