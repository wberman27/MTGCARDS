import axios from 'axios'

export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE"
export const FETCH_CARDS_START = "FETCH_CARDS_START"


export const fetchCards = (color) =>{
    return (dispatch) =>{


        dispatch({type: FETCH_CARDS_START})


        axios.get(color)
        .then(res =>{
            console.log(res)
            //res.data.cards
            dispatch({type:FETCH_CARDS_SUCCESS, payload: res.data.cards})
        })
        .catch(err =>{
            console.log(err)
            dispatch({type:FETCH_CARDS_FAILURE, payload: err.message})
        })
    }
}