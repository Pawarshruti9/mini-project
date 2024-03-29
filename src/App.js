// App.js
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Pages/About';
import Homepg from './Pages/Home';
import Contact from './Pages/Contactus';
import Construction from './Pages/Services/Construction';
import Crusher from './Pages/Services/Crusher';
import Bricks from './Pages/Services/Bricks';
import Agencies from './Pages/Services/Agencies';
import Enterprises from './Pages/Services/Enterprises';
import Energy from './Pages/Services/Energy';
import Enquiry from './Components/Contacts/Enquiry';
import Visit from './Components/Contacts/Visit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepg />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/enquiry' element={<Enquiry />} />
            <Route path='/visit' element={<Visit />} />
            <Route path='/Construction' element={<Construction />} />
          <Route path='/Crusher' element={<Crusher />} />
          <Route path='/Bricks' element={<Bricks />} />
          <Route path='/Agencies' element={<Agencies />} />
          <Route path='/Enterprises' element={<Enterprises />} />
          <Route path='/Energy' element={<Energy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
