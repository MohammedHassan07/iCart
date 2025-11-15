import { ToastContainer } from 'react-toastify';

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails';
import WhicshList from './Pages/WhicshList';

function App() {

  return (
    <>

      <Provider store={store}>
        <BrowserRouter>

          <Navbar />
          <ToastContainer />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/whish-list' element={<WhicshList />} />
            <Route path='/product-details' element={<ProductDetails />} />


          </Routes>
        </BrowserRouter>

      </Provider>

    </>
  )
}

export default App
