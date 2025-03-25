import Loading from './components/static/loadingScreen/loading';
import {Suspense,lazy} from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
const Home = lazy(()=>import('./components/home/Home'));
const PendingTodo = lazy(()=>import("./components/pending tasks/pendingTodo/pendingTodo"));
const Completed = lazy(()=>import("./components/completed/completed/completed.jsx"));
const Dashboard = lazy(()=>import("./components/dashboard/dashboard/Dashboard.jsx"))
const router=createBrowserRouter([{
  path:"/",
  element:<Navbar />,
  children:[
    {
      path:"/",
      element:<Suspense fallback={<Loading />}>
                  <Home />
               </Suspense>
    },
    {
      path:"/pending",
      element:<Suspense fallback={<Loading />}>
                <PendingTodo />
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
    }
  ]
}])

function App() {
  
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
