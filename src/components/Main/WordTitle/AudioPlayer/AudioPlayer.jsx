import { Icon } from "@iconify/react"
import { useEffect, useRef, useState } from "react"

const AudioPlayer = ({url}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioElement = useRef()

    useEffect(() => {
        isPlaying ? audioElement.current.play() : audioElement.current.pause()
    }, [isPlaying])
    return (
        <div>
            <audio onEnded={()=>setIsPlaying(false)} src={url} ref={audioElement}/>
            <button className="p-1 text-xl text-white transition-all duration-200 ease-in-out rounded-full bg-vermilion hover:scale-110" onClick={() => setIsPlaying(!isPlaying)}><Icon icon={`${isPlaying ? "material-symbols:pause-rounded" : "material-symbols:play-arrow-rounded"}`} inline={true} /></button>
        </div>
    )
}
export default AudioPlayer