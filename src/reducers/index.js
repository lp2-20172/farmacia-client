import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import person from './person-reducer'
import users from './users-reducer'
import producto from './producto-reducer'
<<<<<<< HEAD
import compra from './compra-reducer'
import venta from './venta-reducer'
import detalleVenta from './detalleVenta-reducer'
import detalleCompra from './detalleCompra-reducer'
import proveedor from './proveedor-reducer'
=======
>>>>>>> fa1798084bb135499dfd9f51cfa0c79363f6fb15
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  producto: producto,
<<<<<<< HEAD
  compra: compra,
  venta: venta,
  detalleVenta: detalleVenta,
  detalleCompra: detalleCompra,
  proveedor: proveedor,
=======
  person: person,
  users: users,
>>>>>>> fa1798084bb135499dfd9f51cfa0c79363f6fb15
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;