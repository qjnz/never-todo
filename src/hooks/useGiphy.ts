import { useState, useEffect } from 'react'

const apiKey = 'nr8NcCB1vX8gPJXh7e3T91KS1KnJrLjM'

export const useGiphy = (keyword: string) => {
  const [giphys, setGiphys] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  async function loadData(query: string) {
    setIsLoading(true)

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=en`
    const resp = await fetch(url).catch((err: Error) => {
      setIsLoading(false)
      setError(err)
    })

    const result = await (resp as any).json()

    setGiphys(result.data)

    setIsLoading(false)
  }

  useEffect(() => {
    if (!keyword) {
      return
    }

    loadData(keyword)
  }, [keyword])

  return [giphys, isLoading, error] as const
}
