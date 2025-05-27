// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
