import NewsCard from "./NewsCard"
import slugify from "slugify"

export default function NewsGrid(props) {

    const { data, query } = props

    let data_filtered = [...data].filter((elem) => {
        return elem.title.toLowerCase().includes(query.toLowerCase()) || elem.abstract.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 my-3">
            {data_filtered.length > 0 && data_filtered.map((elem, i) => {
                const imageUrl = elem.media.length > 0 ? elem.media[0]['media-metadata'][2].url : "/defaultImage.png"
                const imageAlt = elem.media.length > 0 ? `${elem.media[0]['caption']} (c) ${elem.media[0]['copyright']}` : "/defaultImage.png"
                const slug = slugify(elem.title)
                return (
                    <NewsCard key={i} src={imageUrl} alt={imageAlt} slug={slug} uri={elem.uri.split("nyt://article/")[1]}
                    title={elem.title} abstract={elem.abstract} />
                )
            })}
            {data_filtered.length < 1 && <>
                <h1 className="font-bold text-xl">No articles related to your keyword.</h1>
            </>}
        </div>
    )
}