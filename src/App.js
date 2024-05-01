import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import './assets/css/style.css';
import './assets/js/main'
import logo from './logo.svg';
// import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import HomePage from './pages/home-page';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      
    </>
  )
);

function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;
