const initialState = {
    animes: [],
    wanted: [],
}

export const animesReducer = (state:any = initialState,action:any) =>{
    switch(action.type){
        case 'setAnimes':
            return {...state, animes:action.payload}
        case 'setWanted':
            return {...state, wanted:action.payload}
            default: return state;
    }
}

