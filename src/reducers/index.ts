const initialState = {
    animes: [],
}

export const animesReducer = (state:any = initialState,action:any) =>{
    switch(action.type){
        case 'setAnimes':
            return {...state, animes:action.payload}
            default: return state;
    }
}