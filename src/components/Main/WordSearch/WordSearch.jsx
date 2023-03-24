import { Icon } from "@iconify/react"

const WordSearch = ({setWordToSearch}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setWordToSearch(e.target.word.value)
        e.target.word.value = ""
    }

    return (
        <div className="w-full flex justify-center">
            <form className="flex items-center w-full md:w-2/3" onSubmit={handleSubmit}>
                <input type="text" name="word" className="dark:bg-blackDarker border border-r-0 border-grey dark:text-white rounded-l-md px-3 w-full py-2" placeholder="Enter word to search here"/>
                <button type="submit" className="dark:bg-blackDarker border border-l-0 border-grey rounded-r-md py-2 px-3 text-blackLighter dark:text-white text-2xl"><Icon icon="material-symbols:manage-search-rounded" inline={true} /></button>
            </form>
        </div>
    )
}
export default WordSearch