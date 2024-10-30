// src/App.jsx
import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/home/Nav';
import './input.css';
import Header from "./components/about/Header";
import { LanguageProvider } from './LanguageContext';
import Footer from "./components/footer/Footer";
import Price from "./components/price/Price";
import Port from "./components/portfolio/Port";
import About from "./components/section/About";
import Appoin from "./components/appoinment/Appoin";

function App() {
  return (
    <LanguageProvider> 
      <div className='container-fluid'>
        <Nav />
        <Routes>

          <Route path="/" element={<Header />} />
          <Route path="/price" element={<Price />} />
          <Route path="/portfolio" element={<Port />} />
          <Route path="/section" element={<About />} />
          <Route path="/appoinment" element={<Appoin />} />

          {/* Add other routes here if needed */}
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/fees" element={<FeesSection />} />
          <Route path="/service" element={<Service />} />
          <Route path="/links" element={<Links />} />
          <Route path="/info" element={<Inform />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="/doctors" element={<Doctor />} /> */}
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
