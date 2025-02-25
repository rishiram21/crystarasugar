import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Media from './pages/Media'
import Products from './pages/Products' 
import Contact from './pages/Contact'
import CompanyOverview from './pages/CompanyOverview' // New component


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />  
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route path="/products" element={<Products />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
           </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  )
}

export default App