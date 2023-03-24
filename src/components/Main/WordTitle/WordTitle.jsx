import { Icon } from "@iconify/react"
import AudioPlayer from "./AudioPlayer/AudioPlayer"

const WordTitle = ({word, phonetics}) => {
    const filteredPhonetics = phonetics.filter(phonetic => phonetic.license && (phonetic.license.name === "BY 3.0 US" || phonetic.license.name === "BY-SA 3.0"))
    console.log(filteredPhonetics);
    return (
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
            <div className="w-full">
                <h1 className="w-full py-2 mb-2 text-6xl border-b font-title text-blackDarker dark:text-white border-grey">{word}</h1>
                {filteredPhonetics.map(phonetic => {
                    return <p key={phonetic.sourceUrl} className="flex items-center gap-3 mb-1 text-xl text-vermilion font-text">{phonetic.text}<Icon className={`text-sm ${phonetic.text ? "" : "hidden"}`} icon={`${phonetic.license.name === "BY 3.0 US" ? "flagpack:gb-ukm" : "flagpack:us"}`} /></p>
                })}
            </div>
            <AudioPlayer url={phonetics[0].audio ? phonetics[0].audio : phonetics[1].audio}/>
        </div>
    )
}
export default WordTitle