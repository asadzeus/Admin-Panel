import React from 'react'
import Home from './pages/home/Home'
import "./App.css"
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element= {<Home/>}/>
          <Route path="login" element={<Login />} />

          <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New />} />
          </Route>

          <Route path='products'>
              <Route index element={<List/>}/>
              <Route path=":productid" element={<Single />} />
              <Route path="new" element={<New />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App

