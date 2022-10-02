type CurrencyMap = {
  [key: string]: string
}

export const Currency: CurrencyMap = {
  bitcoin: 'BTC',
}

export enum NotifType {
  TX_SENT = 'TRANSACTION_SENT',
  TX_RECEIVED = 'TRANSACTION_RECEIVED',
  ACCOUNT_CREATED = 'ACCOUNT_CREATED',
}
