import React, { useState, useEffect } from 'react'
import { useDebounce } from 'react-use'
import type { Notification } from './types'
import { Input, Container as Flexbox, NotificationList } from './components'
import { getSearchResults } from './services'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [results, setResults] = useState<null | Notification[]>(null)

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
    <Flexbox>
      <Input value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      {isLoading ? <div>{'Loading...'}</div> : results ? <NotificationList list={results} /> : null}
    </Flexbox>
  )
}

export default App
