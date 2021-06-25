import Head from 'next/head'

export default function Header(props) {

    const { title, description } = props
    

    return (
        <Head>
            <title>The New York Times | {title}</title>
            <meta name="description" content={description ? description : "My New York Times Web App"} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}