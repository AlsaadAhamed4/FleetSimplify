import React from 'react';
import { render } from 'react-dom';
import Asidebar from './Components/Asidebar';
import Header from './Components/Header';
import './styles.css';


const Application = () => {
  return (
    <>
      <Header />
      <Asidebar />
    </>
  );
};

render(<Application />, document.getElementById('root'));

