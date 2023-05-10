import {Route,Routes} from 'react-router-dom'

import Home from './components/Home'

import Header from './components/Header'

import ItemDetails from './components/ItemDetails'

import LoginForm  from './components/LoginForm'

import OwnerPage from './components/OwnerPage'

import Contact from './components/contact'

import Cart from './components/Cart'

import './App.css'

const App=()=>(
  <>
  <Header />
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/ItemDetails/:id" element={<ItemDetails/>}/>
    <Route exact path="/login" element={<LoginForm/>}/>
    <Route exact path="/ownerPage" element={<OwnerPage/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
  </Routes>
  </>
)

export default App