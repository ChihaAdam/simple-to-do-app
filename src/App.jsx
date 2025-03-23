import Loading from './components/static/loadingScreen/loading';
import {Suspense,lazy} from 'react';

const MainApp = lazy(()=>import("./components/mainApp/mainApp"));

function App() {
  
  return (
    <Suspense fallback={<Loading />}>
      <MainApp />
    </Suspense>
  )
}

export default App
