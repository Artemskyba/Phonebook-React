import { Bar } from 'components/bar/bar';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Bar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
