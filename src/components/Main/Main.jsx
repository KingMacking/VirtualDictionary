import { Ripples } from "@uiball/loaders"
import { useEffect, useState } from "react"
import fetcher from "../../helpers/fetcher"
import WordMeanings from "./WordMeanings/WordMeanings"
import WordSearch from "./WordSearch/WordSearch"
import WordSource from "./WordSource/WordSource"
import WordTitle from "./WordTitle/WordTitle"

const Main = () => {
    const [wordData, setWordData] = useState(null)
    const [wordToSearch, setWordToSearch] = useState("welcome")
    const [isSearching, setIsSearching] = useState(true)

    useEffect(() => {
        setIsSearching(true)
        const fetchData = async () => {
            await fetcher(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`)
            .then(data => {
                setWordData(data[0])
            })
            .finally(() => {
                setIsSearching(false)
            })
        }
        fetchData()
    }, [wordToSearch])

    return (
        <section className="w-full">
            <article>
                    <WordSearch setWordToSearch={setWordToSearch} />
            {isSearching ? 
                <div className="flex items-center justify-center w-full h-full">
                    <Ripples size={200} speed={1} color="#EF3E36" /> 
                </div>
            : 
                <>
                    <header>
                        <WordTitle word={wordData.word} phonetics={wordData.phonetics} />
                    </header>
                    <main>
                        <WordMeanings meanings={wordData.meanings} />
                    </main>
                    <footer>
                        <WordSource source={wordData.sourceUrls}/>
                    </footer>
                </>
            }
                
            </article>
        </section>
    )
}
export default Main