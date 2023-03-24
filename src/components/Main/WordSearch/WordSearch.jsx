import { Icon } from "@iconify/react"
import { useState } from "react"

const WordSearch = ({setWordToSearch}) => {
    const [invalidSearch, setInvalidSearch] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.word.value === "" || e.target.word.value.includes(" ") || /^[a-zA-Z]+$/.test(e.target.word.value) === false) {
            setInvalidSearch(true)
        } else {
            setWordToSearch(e.target.word.value.toLowerCase())
            setInvalidSearch(false)
            e.target.word.value = ""
        }
    }

    return (
        <div className="w-full">
            <form className="flex items-center w-full" onSubmit={handleSubmit}>
                <input type="text" name="word" className="w-full px-3 py-2 border border-r-0 dark:bg-blackDarker border-grey dark:text-white rounded-l-md" placeholder="Enter word to search here"/>
                <button type="submit" className="px-3 py-2 text-2xl border border-l-0 dark:bg-blackDarker border-grey rounded-r-md text-blackLighter dark:text-white"><Icon icon="material-symbols:manage-search-rounded" inline={true} /></button>
            </form>
            {invalidSearch && <p className="pl-2 text-sm text-vermilion">You should enter a valid word to find!</p>}
        </div>
    )
}
export default WordSearch