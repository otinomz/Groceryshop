const apiRequest = async (url = "", optionsObj = null, errorMsg = null) => {
    try {
        const response = await fetch(url, optionsObj)
        if(!response.ok) throw Error("Please reload the app")
    } catch (err) {
        errorMsg = err.message
    } finally {
        return errorMsg
    }
}

export default apiRequest