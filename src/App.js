import React from 'react';

import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'


import './style.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Footer />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
