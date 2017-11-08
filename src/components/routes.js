import { Content } from './app/AppContent'
import { Farmacenter, Farmacia }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import UsersList from './users/List'
import UsersForm from './users/Form'
import PersonList from './person/List'
import PersonForm from './person/Form'
import CategoriaForm from './categorias/Form'
<<<<<<< HEAD
import ProductoList  from './productos/List'
import ProductoForm  from './productos/Form'
import CompraList from './compras/List'
import CompraForm from './compras/Form'
import VentaList  from './ventas/List'
import VentaForm  from './ventas/Form'
import DetalleVentaList  from './detalleVentas/List'
import DetalleVentaForm  from './detalleVentas/Form'
import DetalleCompraList  from './detalleCompras/List'
import DetalleCompraForm  from './detalleCompras/Form'
import AlmacenList  from './almacenes/List'
import AlmacenForm  from './almacenes/Form'

=======
import ProductoList from './productos/List'
import ProductoForm from './productos/Form'
>>>>>>> fa1798084bb135499dfd9f51cfa0c79363f6fb15
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/Farmacenter',
    title: 'Farmacenter',
    icon: 'Farmacenter',
    exact: true,
    component: Farmacenter
  },


  {
    path: '/farmacia',
    title: 'farmacia',
    icon: 'send',
    component: Farmacia
  },
  {
    path: '/core/',
    title: 'core',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/core/users/list',
        exact: true,
        title: 'users',
        icon: 'send',
        component: UsersList


      },
      {
        path: '/core/users/new',
        exact: true,
        title: 'Users New!',
        icon: 'send',
        component: UsersForm,
        novisible: true
      },
      {
        path: '/core/users/edit/:id',
        exact: true,
        title: 'Users Edit!',
        icon: 'send',
        component: UsersForm,
        novisible: true
      },
      
      {
        path: '/core/person/list',
        exact: true,
        title: 'person',
        icon: 'send',
        component: PersonList
      },
      {
        path: '/core/person/new',
        exact: true,
        title: 'Person New!',
        icon: 'send',
        component: PersonForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      }
    ]
  },
  {
    path: '/catalogo',
    title: 'Catalogo!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias!',
        icon: 'send',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/list',
        exact: true,
        title: 'Productos!',
        icon: 'send',
        component: ProductoList
      },
      {
        path: '/catalogo/productos/new',
        exact: true,
        title: 'Producto New!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/edit/:id',
        exact: true,
        title: 'Producto Edit!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
<<<<<<< HEAD
      {
        path: '/catalogo/ventas/list',
        exact: true,
        title: 'Ventas',
        icon: 'local_mall',
        component: VentaList
      },
      {
        path: '/catalogo/ventas/new',
        exact: true,
        title: 'Venta New',
        icon: 'local_mall',
        component: VentaForm,
        novisible: true
      },
      {
        path: '/catalogo/ventas/edit/:id',
        exact: true,
        title: 'Venta Edit',
        icon: 'local_mall',
        component: VentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVentas/list',
        exact: true,
        title: 'DetalleVentas',
        icon: 'insert_link',
        component: DetalleVentaList
      },
      {
        path: '/catalogo/detalleVentas/new',
        exact: true,
        title: 'DetalleVenta New',
        icon: 'insert_link',
        component: DetalleVentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVentas/edit/:id',
        exact: true,
        title: 'DetalleVenta Edit',
        icon: 'insert_link',
        component: DetalleVentaForm,
        novisible: true
      },
      {
        path: '/catalogo/compras/list',
        exact: true,
        title: 'Compras',
        icon: 'shopping_cart',
        component: CompraList
      },
      {
        path: '/catalogo/compras/new',
        exact: true,
        title: 'Nueva Compras',
        component: CompraForm,
        novisible: true
      },
      {
        path: '/catalogo/compras/edit/:id',
        exact: true,
        title: 'Editar Compra',
        icon: 'shopping_cart',
        component: CompraForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleCompras/list',
        exact: true,
        title: 'Detalle Compras',
        icon: 'insert_link',
        component: DetalleCompraList
      },
      {
        path: '/catalogo/detalleCompras/new',
        exact: true,
        title: 'Nueva Compras',
        component: DetalleCompraForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleCompras/edit/:id',
        exact: true,
        title: 'Editar Detalle Compra',
        icon: 'insert_link',
        component: DetalleCompraForm,
        novisible: true
      },
      {
        path: '/catalogo/almacenes/list',
        exact: true,
        title: 'Almacenes',
        icon: 'dns',
        component: AlmacenList
      },
      {
        path: '/catalogo/almacenes/new',
        exact: true,
        title: 'Almacen',
        component: AlmacenForm,
        novisible: true
      },
      {
        path: '/catalogo/almacen/edit/:id',
        exact: true,
        title: 'Editar almacen',
        icon: 'dns',
        component: AlmacenForm,
        novisible: true
      },
=======
>>>>>>> fa1798084bb135499dfd9f51cfa0c79363f6fb15
    ]
  }
]

export { routes, routese }