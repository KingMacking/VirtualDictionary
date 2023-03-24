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
            <button className="bg-vermilion text-white rounded-full text-6xl p-2 hover:scale-105" onClick={() => setIsPlaying(!isPlaying)}><Icon icon={`${isPlaying ? "material-symbols:pause-rounded" : "material-symbols:play-arrow-rounded"}`} inline={true} /></button>
        </div>
    )
}
export default AudioPlayer