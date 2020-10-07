const initialState = {
  usd: {buy: 0, sale: 0},
  eur: {buy: 0, sale: 0},
  rub: {buy: 0, sale: 0}
}
  
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPD_DATA':
      return {...action.payload}
    default: return state
  }
}
