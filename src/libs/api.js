import {encodeQuery} from './utils'

const baseUrl = 'http://111.231.91.206:8000'

function get(url, params) {
    const query = encodeQuery(params)
    return window.fetch(baseUrl + url + query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
    })
}

function post(url, data) {
    return window.fetch(baseUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify(data)
    })
}

export const login = (data) => post('/auth/login', data)
