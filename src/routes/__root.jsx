import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Suspense } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Navbar />
        <main id="main-content" role="main" className="main">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Outlet />
          {/* </Suspense> */}
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </>
    );
  },
});
