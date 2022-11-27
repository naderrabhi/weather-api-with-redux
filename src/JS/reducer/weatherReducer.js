import { GET_WEATHER_FAIL, GET_WEATHER_LOADING, GET_WEATHER_SUCSESS } from "../actionType/actionType";

const initialState = {weather : null, loading : false , error : null};

export const weatherReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_WEATHER_LOADING:
            return {...state,loading:true}
        case GET_WEATHER_SUCSESS:
            return {...state,weather: payload,loading:false}
        case GET_WEATHER_FAIL:
            return {...state,error: payload , loading: false}
    
        default: return state
    }
}