import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import ProductoList  from './productos/List'
import ProductoForm  from './productos/Form'
import VentaList  from './ventas/List'
import VentaForm  from './ventas/Form'
import DetalleVentaList  from './detalleVentas/List'
import DetalleVentaForm  from './detalleVentas/Form'

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
    path: '/home',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },


  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'send',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'send',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      },
      {
        path: '/tacos/about/:id',
        title: 'About!',
        icon: 'send',
        component: About
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
      {
        path: '/catalogo/ventas/list',
        exact: true,
        title: 'Ventas!',
        icon: 'send',
        component: VentaList
      },
      {
        path: '/catalogo/ventas/new',
        exact: true,
        title: 'Venta New!',
        icon: 'send',
        component: VentaForm,
        novisible: true
      },
      {
        path: '/catalogo/ventas/edit/:id',
        exact: true,
        title: 'Venta Edit!',
        icon: 'send',
        component: VentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVentas/list',
        exact: true,
        title: 'DetalleVentas!',
        icon: 'send',
        component: DetalleVentaList
      },
      {
        path: '/catalogo/detalleVentas/new',
        exact: true,
        title: 'DetalleVenta New!',
        icon: 'send',
        component: DetalleVentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVentas/edit/:id',
        exact: true,
        title: 'DetalleVenta Edit!',
        icon: 'send',
        component: DetalleVentaForm,
        novisible: true
      },
      
    ]
  }
]

export { routes, routese }