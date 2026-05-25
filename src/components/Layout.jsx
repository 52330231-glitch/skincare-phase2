import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
       <footer>
        <p>&copy; 2026 Glow & Care Project. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Layout;

    