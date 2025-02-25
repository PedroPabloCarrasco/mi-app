import React from 'react'



const initialState = {
  contador: 0,
}

type ActionType = { type:'incrementar'};



const contadorReducer = (state: typeof initialState, action:ActionType) => {
  
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }
     
  
    default:
      break;
  }

}





export const ContadorRed = () => {
  return (
    <>
    <h2>Contador: 10</h2>
    </>
  )
}
