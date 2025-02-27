import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../components/Navbar'
import GuideProfilePage from '../pages/GuideProfilePage'
import PaymentPage from '../pages/PaymentPage'

const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            {/* <Route path='/' element={<GuideProfilePage />} /> */}
            <Route path='/' element={<PaymentPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Index