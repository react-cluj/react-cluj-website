import { useEffect, useState, useReducer } from 'react'
import dataFetchReducer from './dataFetchReducer'
import axios from 'axios'

export const useDataApi = (initialUrl, initialData) => {
  /*
   * @param initialUrl => the URL you want to initially fetch data from ( String )
   * @param initialData =>  initial data which your component will have ( preferred type: <Array> )
   * */
  const [url, setUrl] = useState(initialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })
  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })

      try {
        const result = await axios(url)

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [url])

  const doFetch = url => {
    setUrl(url)
  }

  return { ...state, doFetch }
}
