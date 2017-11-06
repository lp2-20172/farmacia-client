import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import ProductoList from './productos/List'
import ProductoForm from './productos/Form'
import CompraList from './compras/List'
import CompraForm from './compras/Form'
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
    title: 'Home',
    icon: 'home',
    exact: true,
    component: Home
  },


  {
    path: '/sandwiches',
    title: 'sandwiches',
    icon: 'warning',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'view_list',
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
    title: 'Catalogo',
    icon: 'chrome_reader_mode',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias',
        icon: 'local_mall',
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
        title: 'Productos',
        icon: 'send',
        component: ProductoList
      },
      {
        path: '/catalogo/productos/new',
        exact: true,
        title: 'Producto New',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/edit/:id',
        exact: true,
        title: 'Producto Edit',
        icon: 'send',
        component: ProductoForm,
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
    ]
  }
]

export { routes, routese }