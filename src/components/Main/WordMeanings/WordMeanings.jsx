const WordMeanings = ({meanings}) => {
    return (
        <div className="flex flex-col gap-8">
            {meanings.map(meaning => {
                return (
                    <div>
                        <h2 className="mb-2 text-2xl italic font-bold underline font-title text-blackDarker dark:text-white">{meaning.partOfSpeech}</h2>
                        <ul className="list-disc list-inside text-vermilion font-text">
                            <p className="text-lg text-grey">Meaning</p>
                            {meaning.definitions.map(definition => {
                                return (
                                    <li className="py-2 pl-6 last:mb-4">
                                        <span className="text-blackDarker dark:text-white">{definition.definition}</span>
                                        {definition.example && <p className="text-grey">"{definition.example}"</p>}
                                    </li>
                                )
                            })}
                        </ul>
                        {meaning.synonyms.length > 0 && <p className="text-lg text-grey">Synonyms: <span className="text-vermilion">{meaning.synonyms.join(", ")}</span></p>}
                        {meaning.antonyms.length > 0 && <p className="text-lg text-grey">Antonyms: <span className="text-vermilion">{meaning.antonyms.join(", ")}</span></p>}
                    </div>
                )
            })}
        </div>
    )
}
export default WordMeanings