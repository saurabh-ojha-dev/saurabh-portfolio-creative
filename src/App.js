import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Contactme from './components/Contactme';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contactme' element={<Contactme />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
