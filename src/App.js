
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Total from './components/total/total';
import Main from './components/main/main';
import Menu from './components/menu/menu';

import React from 'react';

const App = () => {

  return (
    <div className='flex flex-row w-full mb-[50px]'>
      <Navbar />
      <div className='flex flex-col w-full gap-[31px]'>
         <Header />
         <div className='flex flex-col  sm:px-7 px-3 gap-[30px]'>
          <Total />
          <Main />
          <Menu />
         </div>
      </div>
      
    </div>
  )
}

export default App
