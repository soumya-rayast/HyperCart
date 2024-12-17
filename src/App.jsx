import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollTop from './Components/ScrollTop'
import AdminDashboard from './Admin/AdminDashboard'
import Auth from './Auth/Auth'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import ProductInfo from './Pages/ProductInfo'
import Cart from './Pages/Cart'
import UserDashboard from './Pages/UserDashboard'
import AddProduct from './Admin/AddProduct'
import UpdateProduct from './Admin/UpdateProduct'
import AllProducts from './Pages/AllProducts'
import MyState from './context/myState'
import { Toaster } from 'react-hot-toast'
import ProtectedRouteForUser from './ProtectedRoutes/ProtectedRouteForUser'
import ProtectedRouteForAdmin from './ProtectedRoutes/ProtectedRouteForAdmin'
function App() {
  return (
    <div>
      <MyState >
        <Router>
          <ScrollTop />
          <Routes >
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NoPage />} />
            <Route path='/productInfo' element={<ProductInfo />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/allProduct' element={<AllProducts />} />
            <Route path='/user-dashboard' element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            } />
            <Route path='/admin-dashboard' element={
              <ProtectedRouteForAdmin >
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            } />
            <Route path='/addproduct' element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>} />
            <Route path='/updateproduct' element={<UpdateProduct />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  )
}

export default App