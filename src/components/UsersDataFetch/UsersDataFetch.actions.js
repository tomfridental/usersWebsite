import fetch from 'isomorphic-fetch'

export const FETCHING_USER_DATA = 'FETCHING_USER_DATA'
export const USER_DATA_FETCHED  = 'USER_DATA_FETCHED'
export const FETCH_USER_ERROR  	  = 'FETCH_USER_ERROR'

export const userDataFetch = ()=> {

	return function (dispatch) {

		dispatch({ type: FETCHING_USER_DATA })

		return  fetch('//localhost:3000/static/data/MOCK_DATA.json')
				.then((res) => res.json())
				.then(res => dispatch({
					type	: USER_DATA_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_USER_ERROR,
					payload	: err
				}))
	  }
}