import { createStore } from "redux"
const initialState = {
    puntos : 0,
    respuestas:[]
}

const reducerGame = (state=initialState , action)=>{
    if( state.puntos <=0 && action.type === "restar_puntos"){
        return state;
    }
    
    console.log(state)
    switch(action.type){
        case "agregar_puntos":  return {...state, puntos : state.puntos+=1};
        case "restar_puntos" :return {...state, puntos : state.puntos-=1};
        case "agregar_respuestas" :  return {
            ...state, respuestas : [...state.respuestas,action.state]}; 
        case "reset_notify" :  return { ...state , puntos : 0};
        default:return state ;
        
    }
    
}
export default createStore(reducerGame)