import * as request from '../utils/request'

//Movie API
// export const getMovie = (type) => {
//     return request.get(`movie/${type}`, { params: { api_key: 'd0df8b7fb0eb66ce03855cb6448b4845' } })
// }
export const getMovie = (type) => {
    return request.get(`movie/${type}`)
}
export const getVideos = (type) => {
    return request.get(`movie/${type}/videos`)
}
export const getDetail = (id) => {
    return request.get(`movie/${id}`)
}
export const getCredits = (id) => {
    return request.get(`movie/${id}/credits`)
}
export const getSimilar = (id) => {
    return request.get(`movie/${id}/similar`)
}
export const getWatch = (id) => {
    return request.get(`movie/${id}/watch/providers`)
}
export const seachMovie = (type, option) => {
    return request.get(`search/${type}`, option)
}

//TV Show API
export const getTVShow = (type) => {
    return request.get(`tv/${type}`)
}
export const getDetailTVShow = (id) => {
    return request.get(`tv/${id}`)
}