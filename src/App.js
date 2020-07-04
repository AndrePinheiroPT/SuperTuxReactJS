import React from 'react';

import Header from './components/header'
import Navbar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'

import './style.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
