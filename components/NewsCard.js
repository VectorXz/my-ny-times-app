import Image from 'next/image'
import Link from 'next/link'

export default function NewsCard(props) {

    const { src, alt, slug, uri, title, abstract } = props

    return (
        <div className="flex flex-col flex-1 border border-gray-200 rounded-xl shadow-md">
            <div className="relative w-full h-60 mb-1">
                <Image src={src} alt={alt} className="rounded-t-xl" layout="fill" objectFit="cover" />
            </div>
            <div className="px-4 py-5">
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="mt-5">{abstract}</p>
            </div>
            <Link href={`${uri}/${slug}`}>
                <div className="mt-auto text-center py-5 bg-gray-500 text-white font-bold
                rounded-b-xl hover:bg-gray-700 transition cursor-pointer">
                    Read more...
                </div>
            </Link>
        </div>
    )
}