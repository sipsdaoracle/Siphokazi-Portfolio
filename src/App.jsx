// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Profile, Resume, Portfolio, Blog, Contact, About } from './components';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Profile/>

        <Routes>
          <Route path= "/" element={<About/>}/>
          <Route path= "/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
