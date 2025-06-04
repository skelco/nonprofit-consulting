import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import './styles.css';
import reportWebVitals from './reportWebVitals.js';

import App from './App.jsx';

import Home from './views/Home.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import Privacy from './views/Privacy.jsx';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: App,
});

const aboutRoute = createRoute({
  path: '/about',
  getParentRoute: () => rootRoute,
  component: About,
});

const contactRoute = createRoute({
  path: '/contact',
  getParentRoute: () => rootRoute,
  component: Contact,
});

const privacyRoute = createRoute({
  path: '/privacy',
  getParentRoute: () => rootRoute,
  component: Privacy,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  contactRoute,
  privacyRoute,
]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
