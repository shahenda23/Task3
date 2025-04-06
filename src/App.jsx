import './App.css'
import SimpleAppBar from './Pages/Bar.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Create from './Pages/CreateUser.jsx'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Products from './Pages/Products.jsx'; 
import Cart from './Pages/Cart.jsx'; 


function App() {
  return (
    <>
    <Router>
      <div>
        <SimpleAppBar/>
        <div style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/Pages/CreateUser" element={<Create/>} />  
            <Route path="/Pages/Products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}
export default App