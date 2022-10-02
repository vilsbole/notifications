import React, { useState } from 'react'
import styled from 'styled-components'
import { Notifications } from './features'

const SWrapper = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`

export const App = () => {
  return (
    <SWrapper>
      <Notifications />
    </SWrapper>
  )
}
