import { lazy } from 'react';

// import HomePage from '../pages/HomePage';
// import Contacts from '../pages/Contacts';
// import Products from '../pages/Products';
// import Counters from '../pages/Counters';
// import LifeCycleTest from '../pages/LifeCycleTest';
// import MovieSearch from '../pages/MovieSearch';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const Contacts = lazy(() =>
  import('../pages/Contacts' /* webpackChunkName: "Contacts" */),
);
const Products = lazy(() =>
  import('../pages/Products' /* webpackChunkName: "Products" */),
);
const Counters = lazy(() =>
  import('../pages/Counters' /* webpackChunkName: "Counters" */),
);
const LifeCycleTest = lazy(() =>
  import('../pages/LifeCycleTest' /* webpackChunkName: "LifeCycleTest" */),
);
const MovieSearch = lazy(() =>
  import('../pages/MovieSearch' /* webpackChunkName: "MovieSearch" */),
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails' /* webpackChunkName: "MovieDetails" */),
);
const HocPage = lazy(() =>
  import('../pages/HocPage' /* webpackChunkName: "HocPage" */),
);
const ContextDemo = lazy(() =>
  import('../pages/ContextDemo' /* webpackChunkName: "ContextDemo" */),
);
const Todos = lazy(() =>
  import('../pages/Todos' /* webpackChunkName: "Todos" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/products',
    label: 'Products',
    component: Products,
    showInMenu: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
    showInMenu: true,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
    showInMenu: true,
  },
  {
    path: '/life-cycle-test',
    label: 'Life-cycle-test',
    component: LifeCycleTest,
    showInMenu: true,
  },
  {
    path: '/MovieSearch/:id',
    label: 'Movie Details',
    component: MovieDetails,
  },
  {
    path: '/MovieSearch',
    label: 'Movie Search',
    component: MovieSearch,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/hoc',
    label: 'Hoc Demo',
    component: HocPage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/context',
    label: 'Context Demo',
    component: ContextDemo,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: Todos,
    exact: true,
    showInMenu: true,
  },
];
