const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

export function loadData() {
  return async dispatch => {
    const response = await fetch(url)
    const data = await response.json()
    const state = {
      usd: {buy: (+data[0].buy).toFixed(2), sale: (+data[0].sale).toFixed(2)},
      eur: {buy: (+data[1].buy).toFixed(2), sale: (+data[1].sale).toFixed(2)},
      rub: {buy: (+data[2].buy).toFixed(3), sale: (+data[2].sale).toFixed(3)}
    }
    dispatch({type: 'UPD_DATA', payload: state})
  }
}