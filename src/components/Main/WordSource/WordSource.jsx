const WordSource = ({source}) => {
    return (
        <div className="flex flex-col items-center w-full px-6 py-2 mt-12 border rounded-md border-grey">
            <h2 className="px-20 text-2xl text-center border-b font-title text-blackDarker dark:text-white w-fit">Source</h2>
            <p className="py-2 text-sm text-center sm:text-base font-text text-vermilion">{source}</p>
        </div>
    )
}
export default WordSource