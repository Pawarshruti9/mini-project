
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from '../src/Pages/About';
import Home from '../src/Pages/Home';
import Services from '../src/Pages/Services';
import Contact from '../src/Pages/Contactus.jsx';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/about' element={<About Us/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact Us/>} />
        </Routes>
      </Navbar>
      <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
