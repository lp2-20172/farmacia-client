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
<<<<<<< HEAD
import proveedor from './proveedor-reducer'
=======
import almacen from './almacen-reducer'
>>>>>>> f15f315f187a6b65f9c77c5a258c4b1014311e25
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
<<<<<<< HEAD
  proveedor: proveedor,
=======
  almacen: almacen,
>>>>>>> f15f315f187a6b65f9c77c5a258c4b1014311e25
=======
  person: person,
  users: users,
>>>>>>> fa1798084bb135499dfd9f51cfa0c79363f6fb15
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;