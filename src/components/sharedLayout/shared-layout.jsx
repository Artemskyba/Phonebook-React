import { Bar } from 'components/bar/bar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppLayout } from './shared-layout.styled';

export const SharedLayout = () => {
  return (
    <AppLayout>
      <Bar />
      <main>
        <Suspense fallback={'Wait a few seconds, loading'}>
          <Outlet />
        </Suspense>
      </main>
    </AppLayout>
  );
};
