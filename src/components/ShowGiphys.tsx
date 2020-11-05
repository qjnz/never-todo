import React, { useState } from 'react'
import { useGiphy } from '../hooks/useGiphy'

interface Props {
  keyword: string
}

export const ShowGiphys = ({ keyword }: Props) => {
  const [query, setQuery] = useState(keyword)
  const [giphys, isLoading, error] = useGiphy(query)
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value
    setQuery(val)
  }

  return (
    <div className="container">
      <input value={query} onChange={handleOnChange} />

      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        giphys.length &&
        giphys.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <img src={item.images?.original?.url} alt={item.title} />
            </div>
          )
        })}
    </div>
  )
}
