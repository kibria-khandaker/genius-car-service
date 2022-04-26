import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ManageServices from './Pages/ManageServices/ManageServices';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';
import GoogleMap from './Pages/GoogleMap/GoogleMap';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path="/home" element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/location" element={<GoogleMap/>}></Route>

        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>

        <Route path="/addservice" element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        }></Route>

        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        }></Route>

        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
