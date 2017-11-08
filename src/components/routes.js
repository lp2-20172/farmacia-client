import { Content } from './app/AppContent'
import { Farmacenter, Farmacia }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import UsersList from './users/List'
import UsersForm from './users/Form'
import PersonList from './person/List'
import PersonForm from './person/Form'
import CategoriaForm from './categorias/Form'
import ProductoList from './productos/List'
import ProductoForm from './productos/Form'
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
    ]
  }
]

export { routes, routese }