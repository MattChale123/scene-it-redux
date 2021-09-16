export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE'

export function createAddMovie(watchMovieList) {
    return {
        type: ADD_MOVIE,
        payload: {
            watchMovieList
        }
    }
}

export function createDeleteMovie(watchMovieList) {
    return {
        type: DELETE_MOVIE,
        watchMovieList
    }
}
export const SET_LOADING = 'SET_LOADING'


export function setLoading(value) {
    return {
        type: SET_LOADING,
        value,
    }
}

export const CHANGE_NAME = 'CHANGE_NAME'

export function setName(value) {
    return {
        type: CHANGE_NAME,
        value
    }
}

export const SET_DATA = 'SET_DATA'

export function setData(movieArray) {
    return {
        type: SET_DATA,
        payload: {
            movieArray
        }
    }
}

