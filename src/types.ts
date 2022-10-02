import { NotifType } from './constants'

type WAddress = string
interface NotifBase {
  id: number
  type: NotifType
  data: Record<string, unknown>
}
export interface NotifTranscation extends NotifBase {
  type: NotifType.TX_SENT | NotifType.TX_RECEIVED
  data: {
    id: number
    amount: number
    unit: string
    to: WAddress
    from: WAddress
  }
}

export interface NotifAccountCreated extends NotifBase {
  type: NotifType.ACCOUNT_CREATED
  data: {
    id: number
    name: string
    currency: string
  }
}

export type Notification = NotifTranscation | NotifAccountCreated
