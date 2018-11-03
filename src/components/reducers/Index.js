import { combineReducers } from 'redux';
import BrowseRuducer from './Browse.reducer';
// import CreateReducer from '../Create/Create.reducer';


const rootReducer = combineReducers({
    userData: BrowseRuducer,
   
  })
  
  export default rootReducer