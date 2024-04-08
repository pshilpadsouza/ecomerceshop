import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/' element={<Home />} />

          </Routes>
  </Router>
    </div>
  );
}
export default App;

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* Other routes /
            </Routes>
        </Router>
    );
}*/




/*import './App.css';
//import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
//import Product from './Product';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>

        <Router>
          <Route path='/Checkout'>
          <Header />
          <Checkout />
          </Route>

        <Route path='/'>
        <Header/>
        <Home/>
      </Route>

      </Router>
</Routes>
     {/*<Product/>*
        </div>
  );
}

export default App;
*/