async function getData() {
    const res = await fetch("/api/config")
    if (res.status !== 200) {
        return alert("something went wrong")
    }
    return res.json()
}



export const appConfig = {
    
}