import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Suspense } from 'react';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

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
