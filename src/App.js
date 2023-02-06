import logo from './logo.svg';
import './App.css';
import {  RouterProvider,BrowserRouter as Routes , Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import siteRoutes from './siteRoutes/siteRoutes';

function App() {
  return (
    <div className="App">
     
      <RouterProvider router={siteRoutes}>
      </RouterProvider>
    </div>
  );
}

export default App;
