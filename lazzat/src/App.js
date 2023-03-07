import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureComponent from './components/FeatureComponent';
import AboutComponent from './components/AboutComponent';
import MenuComponent from './components/MenuComponent';
import CallbackComponent from './components/CallbackComponent';
import TeamComponent from './components/TeamComponent';
import ReviewsComponent from './components/ReviewsComponent';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import MenuPage from './components/MenuPage';
import TeamPage from './components/TeamPage';
import BookingPage from './components/BookingPage';
import TestimonialPage from './components/TestimonialPage';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import Terms from './components/Terms';
import HomeMenuCom from './components/HomeMenuCom';
const App = ()=> {

    return (
      <BrowserRouter>
      <Routes>
    
    <Route exact path='/' element={
      <> <Header />
      
      <AboutComponent />
      <HomeMenuCom/>
      <FeatureComponent />
      <CallbackComponent />
      <TeamComponent />
      <ReviewsComponent />
      <Footer /></>
    } />
   
   <Route path='/about' element={
      <> <AboutPage />      
      <AboutComponent />     
      <Footer /></>
    } />

<Route path='/service' element={
      <> <ServicePage />      
      <FeatureComponent />     
      <Footer /></>
    } />

<Route path='/menu' element={
      <> <MenuPage />      
      <MenuComponent />     
      <Footer /></>
    } />

<Route path='/booking' element={
      <> <BookingPage />      
      <CallbackComponent />     
      <Footer /></>
    } />

<Route path='/team' element={
      <> <TeamPage />      
      <TeamComponent />     
      <Footer /></>
    } />

<Route path='/testimonial' element={
      <> <TestimonialPage />      
      <ReviewsComponent />     
      <Footer /></>
    } />

<Route path='/contact' element={
      <> <ContactPage />      
         
      <Footer /></>
    } />

<Route path='/privacy' element={
      <> <PrivacyPage />      
         
      <Footer /></>
    } />

<Route path='/terms' element={
      <> <Terms />      
         
      <Footer /></>
    } />
   
   
      
    </Routes>
    </BrowserRouter>
    
    );
  }


export default App;