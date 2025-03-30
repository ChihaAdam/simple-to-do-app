import Loading from './components/static/loadingScreen/loading';
import {Suspense,lazy,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { styling } from './utils/state/store.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
const About = lazy(()=>import('./features/about.jsx'));
const Pending = lazy(()=>import("./features/pendingTodo"));
const Completed = lazy(()=>import("./features/completed.jsx"));
const Settings = lazy(()=>import("./features/settings.jsx"));
const Dashboard = lazy(()=>import("./features/Dashboard.jsx"));
const NotFound = lazy(()=>import("./components/error/notFound.jsx"));
const router=createBrowserRouter([{
  path:"/",
  element:<Navbar />,
  errorElement:<Suspense fallback={<Loading />}>
                  <NotFound />
              </Suspense>,
  children:[
    {
      path:"/",
      element:<Suspense fallback={<Loading />}>
                  <Pending />
               </Suspense>
    },
    {
      path:"/about",
      element:<Suspense fallback={<Loading />}>
                <About />
              </Suspense>
    },
    {
      path:"/completed",
      element:<Suspense fallback={<Loading />}>
                <Completed />
              </Suspense>
    },
    {
      path:"/dashboard",
      element:<Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
    },
    {
      path:"/settings",
      element:<Suspense fallback={<Loading />}>
                <Settings />
              </Suspense>
    }
  ]
}])

function App() {
  const style = useSelector(styling);
  const mode=style.mode;

  useEffect(()=>{
    if (mode=="light") document.body.classList.remove('dark');
    else document.body.classList.add('dark');
  },[style])
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
