import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { DateTime } from 'luxon'
import Header from '../../components/Header'

export default function Content(props) {

    const { data } = props

    const datetimeToString = DateTime.fromISO(data.pub_date).toLocaleString(DateTime.DATETIME_FULL)

    const media = data.multimedia.length > 0 ? {
      url: 'https://static01.nyt.com/'+data.multimedia[0].url,
      width: data.multimedia[0].width,
      height: data.multimedia[0].height > 300 ? 300 : data.multimedia[0].height
    } : {
      url: '/defaultImage.png',
      width: 600,
      height: 300
    }

    return (
        <div className="min-h-screen">
            <Header title={data.headline.main+" "+data.byline.original} />

            <main className="flex flex-col container mx-auto p-4 min-h-screen h-full justify-center items-center">
                <div className="flex flex-col text-center">
                  <h1 className="text-5xl font-bold">The New York Times.</h1>
                  <h3 className="text-md mt-3 md:self-end">Find fresh daily articles here.</h3>
                </div>
                <div className="flex flex-row mt-3 w-10/12 justify-center">
                    <hr className="w-full" />
                </div>

                <div className="flex flex-col py-5 w-full md:w-10/12">
                    <div className="flex justify-start mb-5">
                      <Link href="/">
                        <a
                        className="p-2 border border-gray-500 rounded-md 
                        hover:bg-gray-800 hover:text-white hover:border-gray-900 transition">
                          {'<<'} Back
                        </a>
                      </Link>
                    </div>
                    <h1 className="font-bold text-3xl text-center mt-5">{data.headline.main}</h1>
                    <p className="text-center text-sm mt-1">{data.byline.original} | {datetimeToString}</p>
                    <div className="flex justify-center my-5">
                      <hr className="w-36 border-2 border-gray-700" />
                    </div>
                    <Image src={media.url} className="rounded-xl" width={media.width} height={media.height} layout="responsive" objectFit="cover" />
                    <p className="text-xl mt-5 leading-loose">{data.lead_paragraph}</p>
                    <div className="flex justify-end mt-10">
                      <a href={data.web_url}
                      className="px-5 py-3 border border-gray-500 rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-900 transition">
                        Read more at New York Times {'>>'}
                      </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { uri, slug } = context.query;
    const api_key = process.env.API_KEY
    const data = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=
uri:%22nyt://article/${uri}%22&api-key=${api_key}`
        )
    .then((resp) => {
      if(resp.status && resp.status == 200) {
        return resp.data.response.docs[0]
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