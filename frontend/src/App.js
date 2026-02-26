import './App.css';
import "nprogress/nprogress.css";
import AllRoutes from './components/AllRoutes';
import TopLoadingBar from './components/TopLoadingBar';

function App() {
  return (
    <>
      <TopLoadingBar />
      <AllRoutes />
    </>
  );
}

export default App;
