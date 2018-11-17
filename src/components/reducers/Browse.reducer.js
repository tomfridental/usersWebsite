import { FILTERED_DATA } from '../UserDataFilter/UserDataFilter.actions';
import { PROFILE_SELECTED } from '../SelectProfile/SelectProfile.actions';
import { FETCHING_USER_DATA, USER_DATA_FETCHED, FETCH_USER_ERROR }
    from '../UsersDataFetch/UsersDataFetch.actions';
import {USER_CREATED} from '../Create/Create.actions';

let originalState = {
    originalData: [],
    filteredData: [],
    selectedProfile: {},
    doneFetch: false
    
}
//--
export default (state = originalState, action) => {
    switch (action.type) {
        case USER_CREATED:
            return Object.assign({}, state, {
                originalData: [...state.originalData,action.user],
                filteredData: [...state.filteredData,action.user],
                selectedProfile: action.user
              })

        case FETCHING_USER_DATA:
            return Object.assign({}, state, {
                originalData: [],
                filteredData: []
              })

        case USER_DATA_FETCHED:
            return Object.assign({}, state, {
                originalData: action.payload,
                filteredData: action.payload,
                selectedProfile: action.payload[0],
                doneFetch: true
              })
        case FETCH_USER_ERROR:
            return {
                originalData: action.payload.message
            }
        case FILTERED_DATA:
            return Object.assign({}, state, {
                filteredData: action.filterData
              })

        case PROFILE_SELECTED:
            return Object.assign({}, state, {
                selectedProfile: action.chosenProfile
              })
        default:
            return state
    }
}