import { Icon } from "@iconify/react"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center mt-12 font-text text-grey">
            <p className="text-lg">Developed by <span className="font-bold">Matias Atzori</span></p>
            <div className="flex justify-center text-6xl">
                <a href="https://github.com/KingMacking/VirtualDictionary" target="_blank"><Icon icon="mdi:github" /></a>
                <a href="https://www.linkedin.com/in/matiasatzori/" target="_blank"><Icon icon="mdi:linkedin" /></a>
            </div>
        </footer>
    )
}
export default Footer