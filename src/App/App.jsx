import { Route, Routes } from 'react-router-dom'
import Account  from '../Pages/MyAccount/Account'
import Order from '../Pages/MyOrder/Order'
import Orders from '../Pages/MyOrders/Orders'
import SignIn from '../Pages/SignIn/SignIn'
import NotFound from '../Pages/NotFound/NotFound'
import './App.css'
import NavBar from '../Components/NavBar/NavBar'
import Layout from '../Components/Layout/Layout'
import Home from '../Pages/Home/Home'
import CheckOut from '../Components/CheckOut/CheckOut'
import Register from '../Pages/Register/Register'

function App() {
  return (
  <>
    <NavBar/>
    <CheckOut/>
    <Layout>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/my-account' element={<Account/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/order/last' element={<Order/>}/>
    <Route path='/my-orders' element={<Orders/>}/>
    <Route path='/my-orders/:id' element={<Order/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/shoes' element={<Home/>}/>
    <Route path='/electronics' element={<Home/>}/>
    <Route path='/others' element={<Home/>}/>
    <Route path='/furnitures' element={<Home/>}/>
    <Route path='/clothes' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Layout>
</>
  )
}

export default App
