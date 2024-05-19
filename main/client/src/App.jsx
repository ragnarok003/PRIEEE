import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Myform from './components/Myform'
import Result from './components/Result'
import "./App.css";
function App() {

  return (
    <>
      <h2 style={{textAlign:"center"}}className='display-2'>AI ASSISTED APP FOR FARMERS</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Myform/>}></Route>
          <Route path='/result' element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
