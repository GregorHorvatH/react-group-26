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

export const routes = [
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/products',
    label: 'Products',
    component: Products,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
  },
  {
    path: '/life-cycle-test',
    label: 'Life-cycle-test',
    component: LifeCycleTest,
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
  },
];
