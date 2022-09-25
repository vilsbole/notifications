import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDebounce } from 'react-use'
import type { Notification } from './types'
import Input from './Input'

const API = 'http://localhost:5000'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [results, setResults] = useState<null | Notification[]>(null)

  const [_, cancel] = useDebounce(
    async () => {
      setLoading(true)
      try {
        const data = await fetch(`${API}/search?q=${searchText}`).then((res) => res.json())
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
    <Container>
      <Input value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      {isLoading ? (
        <div>{'Loading...'}</div>
      ) : results ? (
        <div>
          {results.map((r) => (
            // TODO we must finalize this integration!! not very pretty like this
            <Item>{JSON.stringify(r)}</Item>
          ))}
        </div>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Item = styled.div`
  border: 2px dashed red;
`

export default App
