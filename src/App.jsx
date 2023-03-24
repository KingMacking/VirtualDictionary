import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"

function App() {

    return (
        <main className="bg-white dark:bg-blackDarker min-h-screen px-4 md:px-20 lg:px-60 xl:px-80 2xl:px-96">
            <Navbar />
            <Main />
            <Footer />
        </main>
    )
}

export default App
