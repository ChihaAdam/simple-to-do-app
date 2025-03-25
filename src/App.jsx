import Loading from './components/static/loadingScreen/loading';
import {Suspense,lazy} from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
const MainApp = lazy(()=>import("./components/mainApp/mainApp"));

const router=createBrowserRouter([{
  path:"/",
  element:<Navbar />,
  children:[
    {
      path:"/",
      element:<MainApp />
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
