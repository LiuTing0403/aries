import {encodeQuery} from './utils'

const baseUrl = 'http://132.232.140.247:8000'
const baseHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Allow-Headers': 'Content-Type'
}

function get(url, params) {
    const query = encodeQuery(params)
    const token = localStorage.getItem('token')
    let headers = {...baseHeaders}
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }
    return window.fetch(baseUrl + url + query, {
        method: 'GET',
        headers,
    }).then(res => {
        if (res.status === 401) {
            window.G.history.push('/signin')
        }
        return res.json()
    })
    .catch(err => console.error(err))
}

function post(url, data) {
    const token = localStorage.getItem('token')
    let headers = {...baseHeaders}
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }
    return window.fetch(baseUrl + url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 401) {
            window.G.history.push('/signin')
        }
        return res.json()
    })
    .catch(err => console.error(err))
}

function put(url, data) {
    const token = localStorage.getItem('token')
    let headers = {...baseHeaders}
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }
    return window.fetch(baseUrl + url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 401) {
            window.G.history.push('/signin')
        }
        return res.json()
    })
    .catch(err => console.error(err))
}

function del(url, params) {
    const token = localStorage.getItem('token')
    let headers = {...baseHeaders}
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }
    return window.fetch(baseUrl + url, {
        method: 'DELETE',
        headers,
    }).then(res => {
        if (res.status === 401) {
            window.G.history.push('/signin')
        }
        return res.json()
    })
    .catch(err => console.error(err))
}

export const login = (data) => post('/auth/login', data)
export const logout = () => post('/auth/logout')
export const resetPassword = (data) => post('/auth/reset_password', data)
export const createConference = (data) => post('/conference/lists/', data)

export const getconferenceList = (params) => get('/conference/lists/', params)
export const getconference = ({id}) => get(`/conference/lists/${id}`)
export const deleteconference = ({id}) => del(`/conference/lists/${id}`)
export const getGuestsList = ({id, ...params}) => get(`/guests/lists/${id}/guests/`, params)
export const getGuest = ({cfId, guestId}) => get(`/guests/lists/${cfId}/guests/${guestId}/`)

export const updateGuestStatus = ({cfId, guestId, ...data}) => put(`/guests/lists/${cfId}/guests/${guestId}/`, data)
