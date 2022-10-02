import React from 'react'
import { Notification } from '../types'
import { NotificationItem } from './NotificationItem'

interface Props {
  list: Notification[]
}
export const NotificationList: React.FC<Props> = ({ list }) => {
  return (
    <div>
      {list.map((data, idx) => (
        <NotificationItem key={idx} data={data} />
      ))}
    </div>
  )
}
