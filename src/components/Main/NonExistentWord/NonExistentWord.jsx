import { Icon } from "@iconify/react"

const NonExistentWord = ({setWordToSearch}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-center text-3xl text-vermilion mt-10">I'm sorry, that word is not in my vocabulary.</h2>
            <p className="text-blackDarker dark:text-white text-xl">Should we go back to home ?</p>
            <button onClick={() => setWordToSearch("home")}><Icon className="bg-vermilion text-white p-2 text-5xl rounded-full" icon="material-symbols:home-rounded" inline={true} /></button>
        </div>
    )
}
export default NonExistentWord