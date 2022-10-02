import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useDebounce } from 'react-use'
import {
  Hourglass,
  TextInput,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from '../../components'
import { getSearchResults } from '../../services'
import { Notification } from '../../types'
import { NotificationList } from './NotificationList'

// TODO: Solve conflict with Window component to enable styled(Window)`` syntax.
const SWrapper = styled.div`
  .window {
    width: 660px;
  }
  .window-content {
    margin: 15% auto;
    text-align: center;
  }
`

export const Notifications: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [results, setResults] = useState<undefined | Notification[]>(undefined)

  const [_, cancel] = useDebounce(
    async () => {
      setLoading(true)
      try {
        const data = await getSearchResults(searchText)
        setResults(data)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    },
    200,
    [searchText, setLoading, setResults]
  )

  useEffect(() => {
    return cancel
  }, [cancel])

  return (
    <SWrapper>
      <Window className="window">
        <WindowHeader>
          <span>Notifications Search</span>
        </WindowHeader>
        <Toolbar>
          <TextInput
            placeholder="search by event type"
            onChange={(e) => setSearchText(e.target.value)}
            width={200}
          />
        </Toolbar>
        <WindowContent>
          {isLoading ? (
            <div className="window-content">
              <Hourglass size="1.5rem" />
            </div>
          ) : results && results.length > 0 ? (
            <NotificationList list={results} />
          ) : (
            <div className="window-content">No results</div>
          )}
        </WindowContent>
      </Window>
    </SWrapper>
  )
}
