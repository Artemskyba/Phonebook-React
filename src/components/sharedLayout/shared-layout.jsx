import { Bar } from 'components/bar/bar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Bar />
      <main>
        <Suspense fallback={'Wait a few seconds, loading'}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
