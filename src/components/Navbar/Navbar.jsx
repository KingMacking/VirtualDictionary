import { Icon } from "@iconify/react"
import useColorMode from "../../hooks/useColorMode"

const Navbar = () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <header>
            <nav className="flex justify-between w-full py-4">
                <p className="flex items-center gap-4 text-2xl text-blackDarker dark:text-white"><Icon className="p-3 text-6xl text-white rounded-full bg-vermilion" icon="gala:book" inline={true} />Dictionary</p>
                <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")} className="flex items-center" ><Icon className="p-2 text-4xl border rounded-full border-grey dark:text-white text-blackDarker" icon={colorMode === "dark" ? "ph:moon-fill" : "ph:sun-fill"}/></button>
            </nav>
        </header>
    )
}
export default Navbar