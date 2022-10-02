import React from 'react'
import styled from 'styled-components'
import { Frame } from '../../components'
import { NotifType, Currency } from '../../constants'
import type { NotifAccountCreated, Notification, NotifTranscation } from '../../types'

// TODO: improve alignement by using Table
const SFrame = styled(Frame)`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: row;
  .category {
    width: 14ch;
  }
  .currency {
    text-align: right;
    margin-right: 3ch;
  }
  .action {
    width: 8ch;
    margin-right: 3ch;
    text-align: center;
  }
`

interface Props {
  data: Notification
}

export const NotificationItem: React.FC<Props> = ({ data }) => {
  switch (data.type) {
    case NotifType.TX_RECEIVED:
      return <NotifTxReceived data={data} />
    case NotifType.TX_SENT:
      return <NotifTxSent data={data} />
    case NotifType.ACCOUNT_CREATED:
      return <NotifAccountCreated data={data} />
    default:
      return null
  }
}

const NotifTxSent: React.FC<{ data: NotifTranscation }> = ({ data: n }) => (
  <>
    <SFrame variant="well">
      <span className="category">🧀&nbsp;Sent</span>
      <span className="currency">
        {n.data.amount}&nbsp;{n.data.unit}
      </span>
      <span className="action">to</span>
      <span>{n.data.to}</span>
    </SFrame>
  </>
)

const NotifTxReceived: React.FC<{ data: NotifTranscation }> = ({ data: n }) => (
  <>
    <SFrame variant="well">
      <span className="category">🥓&nbsp;Received</span>
      <span className="currency">
        {n.data.amount}&nbsp;{n.data.unit}
      </span>
      <span className="action">from</span>
      <span>{n.data.from}</span>
    </SFrame>
  </>
)

const NotifAccountCreated: React.FC<{ data: NotifAccountCreated }> = ({ data: n }) => (
  <SFrame variant="well">
    <span className="category">🥦&nbsp;{Currency[n.data.currency]} Account</span>
    <span>{n.data.name} created</span>
  </SFrame>
)
