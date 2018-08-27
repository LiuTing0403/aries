export const encodeQuery = (obj) => {
    let result = ''
    if (!obj) return result
    const keys = Object.keys(obj)
    const keyQuerys= []
    keys.forEach(key => {
        if (obj[key] || obj[key] === 0) {
            keyQuerys.push(`${key}=${obj[key]}`)
        }
    })
    if (keyQuerys.length > 0) return `?${keyQuerys.join('&')}`
    else return ''
}

export const decodeQuery = (querystring) => {
    const result = {}
    const arr = querystring.split('&')
    arr.forEach(_string => {
        const _arr = _string.split('=')
        result[_arr[0]] = _arr[1]
    })
    return result
}
