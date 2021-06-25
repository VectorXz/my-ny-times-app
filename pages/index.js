import axios from 'axios'
import { useState, useEffect } from 'react'
import NewsGrid from '../components/NewsGrid'
import SearchBox from '../components/SearchBox'
import Header from '../components/Header'
import PeriodSelector from '../components/PeriodSelector'

export default function Home(props) {

  const data = props.data ? props.data : []

  const [query, setQuery] = useState("")
  const [article, setArticle] = useState([...data])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const onPeriodChange = async (period) => {
    setLoading(true)
    const base_url = process.env.NEXT_PUBLIC_BASE_URL
    const data = await axios.get(`${base_url}/api/mostpopular/${period}`)
    .then((resp) => {
      if(resp.status && resp.status == 200) {
        return resp.data
      }
    })
    .catch((err) => {
      console.log(err)
      setError(err)
      return null
    })
    if(data) {
      setArticle([...data])
    } else {
      setArticle([])
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [article])

  return (
    <div className="min-h-screen">
      <Header title="Home" />

      <main className="flex flex-col container mx-auto p-4 min-h-screen h-full justify-center items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-5xl font-bold">The New York Times.</h1>
          <h3 className="text-md mt-3 md:self-end">Find fresh daily articles here.</h3>
        </div>
        <div className="flex flex-col md:flex-row mt-3 w-full md:w-10/12 justify-center">
          <SearchBox query={query} onQueryChange={(q) => setQuery(q)} />
        </div>

        <div className="flex flex-col mt-12 w-full md:w-10/12">
          <div className="flex gap-x-3 items-center">
            <PeriodSelector onPeriodChange={onPeriodChange} />
          </div>
          {article.length < 1 && <>
            <div className="flex items-center justify-center w-full h-96">
              <h1 className="font-bold text-xl">{error.toString()}</h1>
            </div>
          </>}
          {loading && <>
            <div className="flex items-center justify-center w-full h-96">
              <h1 className="font-bold text-xl">Loading...</h1>
            </div>
          </>}
          {!loading && article.length > 0 && <>
            <NewsGrid data={article} query={query} />
          </>}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL
  const data = await axios.get(`${base_url}/api/mostpopular/1`)
  .then((resp) => {
    if(resp.status && resp.status == 200) {
      return resp.data
    }
  })
  .catch((err) => {
    console.log(err)
    return null
  })

  return {
    props: {
      data
    },
  }
}