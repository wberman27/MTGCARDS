import {FETCH_CARDS_SUCCESS, FETCH_CARDS_START, FETCH_CARDS_FAILURE} from '../actions'

const initialState = {
    cards: [],
    isLoading: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CARDS_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_CARDS_SUCCESS:
            return{
                ...state,
                cards: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_CARDS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}