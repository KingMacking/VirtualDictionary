import { Ripples } from "@uiball/loaders"
import { useEffect, useState } from "react"
import fetcher from "../../helpers/fetcher"
import NonExistentWord from "./NonExistentWord/NonExistentWord"
import WordMeanings from "./WordMeanings/WordMeanings"
import WordSearch from "./WordSearch/WordSearch"
import WordSource from "./WordSource/WordSource"
import WordTitle from "./WordTitle/WordTitle"

const Main = () => {
    const [wordData, setWordData] = useState(null)
    const [wordToSearch, setWordToSearch] = useState("welcome")
    const [isSearching, setIsSearching] = useState(true)
    const [nonExistentWord, setNonExistentWord] = useState(false)

    useEffect(() => {
        setIsSearching(true)
        const fetchData = async () => {
            await fetcher(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`)
            .then(data => {
                if(data.title !== "No Definitions Found") {
                    setWordData(data[0]) 
                    setNonExistentWord(false)
                } else {
                    setNonExistentWord(true)
                }
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
                    {nonExistentWord ? <NonExistentWord setWordToSearch={setWordToSearch} /> :
                    <>
                        <header>
                            <WordTitle word={wordData.word} phonetics={wordData.phonetics} />
                        </header>
                        <main>
                            <WordMeanings meanings={wordData.meanings} setWordToSearch={setWordToSearch}/>
                        </main>
                        <footer>
                            <WordSource word={wordData.word} source={wordData.sourceUrls[0].toLowerCase()}/>
                        </footer>
                    </>
                    }
                </>
            }
                
            </article>
        </section>
    )
}
export default Main