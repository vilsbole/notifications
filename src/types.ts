type WAddress = string

interface NotifTranscation {
  id: string
  type: 'TRANSACTION_SENT' | 'TRANSACTION_RECEIVED'
  data: {
    id: number
    amount: number
    unit: string
    to: WAddress
    from: WAddress
  }
}

interface NotifAccountCreated {
  id: number
  type: 'ACCOUNT_CREATED'
  data: {
    id: number
    name: string
    currency: string
  }
}

export type Notification = NotifTranscation | NotifAccountCreated
