import { z } from 'zod'

export const BlockchainSymbolSchema = z.enum(['ETH', 'BSC'])

export type BlockchainSymbol = z.infer<typeof BlockchainSymbolSchema>
