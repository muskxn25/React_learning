import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Datatable from './pages/Datatable';
import Form from './pages/Form';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to = "Datatable">Datatable</Link>
            </li>
            <li>
              <Link to = "/Form">Form</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Datatable" element={<Datatable/>} />
          <Route path = "/Form" element={<Form/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
