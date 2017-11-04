export const FETCH_FILE_LIST = path => {
    return new Promise((resolve, reject) => {
        fetch(`/path?path=${path}`)
            .then(data => data.json())
            .then(json => {
                resolve(json)
            })
    })
}