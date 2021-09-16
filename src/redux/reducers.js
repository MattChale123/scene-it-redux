import { ADD_MOVIE, DELETE_MOVIE, SET_DATA, SET_LOADING, CHANGE_NAME } from "./action"

const initialState = {
    loading: false,
    movieArray: [],
    watchMovieList: [],
    userName: 'Joe'
}


export function movieReducer(state = initialState, action) {
    switch (action.type) {
        // reducer 'change' state by new array and does so by type/ action hence calling Add_movie or delete_movie
        case ADD_MOVIE:
            return {
                ...state,
                watchMovieList: action.payload.watchMovieList
            }
        case DELETE_MOVIE:
            return state.filter((watchlistMovie) => watchlistMovie.imdbID !== action.imdbID)
        default:
            return state
            
    }
    
}

export function handlingUsernameChange(state = initialState, action) {
    switch (action.value) {
        case CHANGE_NAME:
            return {
                userName: action.payload.userName
            }
        default:
            return state;
    }
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                movieArray: action.payload.movieArray
            }
        default:
            return state
    }
}

export function loadingReducer(state = false, action) {
    switch (action.type) {
        case SET_LOADING:
            return action.value

        default:
            return state
    }
}

