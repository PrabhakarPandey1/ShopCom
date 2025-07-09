import { useState, useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/home/home';
import Product from './pages/product/product';
import OurItems from './pages/product/ourItems';
import Signup from './pages/SignUp/SignUp';
import Login from './pages/LogIn/LogIn';
import Mens from './pages/Menswear/menswear'
import Women from './pages/Women/women'
import Elc from './pages/Electronics/electronics'
// Define routes
const allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pro',
    element: <Product />,
  },
  {
    path: '/item',
    element: <OurItems />
  },
  {
    path: '/SignUp',
    element: <Signup />
  },
  {
    path: '/Mens',
    element: <Mens />
  },
   {
    path: '/women',
    element: <Women />
  },
     {
    path: '/electronics',
    element: <Elc />
  },
  {
    path: '/LogIn',
    element: <Login />
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, [])

  return <RouterProvider router={allRoutes} />;
}

export default App;
