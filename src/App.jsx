import React from 'react'

import Landingpage from './components/landingpage'
import { Routes,Route,HashRouter} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/contact'

const App = () => {
  return (
    <>
    <HashRouter >
    <Routes>
       <Route path='/' element={<Landingpage/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </HashRouter>
    

   
    </>
  )
}

export default App