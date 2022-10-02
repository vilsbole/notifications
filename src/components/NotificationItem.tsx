import React from 'react'
import { Item } from './Item'
import { Notification } from '../types'

const getNotificationComponent = (type: Notification['type']) => {
  switch (type) {
    case 'TRANSACTION_SENT':
    case 'TRANSACTION_RECEIVED':
      return TransactionNotif
    case 'ACCOUNT_CREATED':
      return AccountNotif
    default:
      throw Error('[Notification]: Missing type')
  }
}

interface Props {
  data: Notification
}

export const NotificationItem: React.FC<Props> = ({ data }) => {
  const Component = getNotificationComponent(data.type)
  return <Component data={data} />
}

const TransactionNotif: React.FC<Props> = ({ data }) => <Item>{data.type}</Item>

const AccountNotif: React.FC<Props> = ({ data }) => <Item>{data.type}</Item>
