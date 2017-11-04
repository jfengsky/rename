const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const FETCH_FILE_LIST = path => {
    return new Promise((resolve, reject) => {
        fetch(`/path?path=${path}`)
            .then(data => data.json())
            .then(json => {
                resolve(json)
            })
    })
}

export const FETCH_RENAME = data => {
    return new Promise((resolve, reject) => {
        fetch(`/rename`, {
            method: 'post',
            headers,
            body: JSON.stringify(data)
        })
            .then(data => data.json())
            .then(json => {
                resolve(json)
            })
    })
}