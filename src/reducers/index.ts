const initialState = {
    animes: [],
    wanted: [],
    liked:  [],
}

export const animesReducer = (state:any = initialState,action:any) =>{
    switch(action.type){
        case 'setAnimes':
            return {...state, animes:action.payload}
        case 'setWanted':
            return {...state, wanted:action.payload}
        case 'setLiked':
            return {...state, liked:action.payload}
            default: return state;
    }
}

