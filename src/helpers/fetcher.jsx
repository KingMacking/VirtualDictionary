const fetcher = async (url) => {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}
export default fetcher