import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import person from './person-reducer'
import users from './users-reducer'
import producto from './producto-reducer'
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  producto: producto,
  person: person,
  users: users,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;