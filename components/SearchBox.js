export default function SearchBox(props) {

    const { onQueryChange, query } = props

    return (
        <>
            <label className="font-bold" htmlFor="searchbox">Search article:</label>
            <input type="text" id="searchbox"
            className="border-b-2 focus:outline-none focus:border-black transition w-full h-8 md:w-4/5 mt-2 md:mt-0 md:ml-3"
            placeholder="Type your title..."
            value={query}
            onChange={(e) => { onQueryChange(e.target.value) }}
            />
        </>
    )
}