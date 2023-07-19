import React from 'react';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import Trends from './Pages/Trends/Trends';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Counter from './Pages/Counter/Counter';
import Fancy from './Pages/Fancy/Fancy';
import Customer from './Pages/Customer/Customer';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from './Components/Navbar/Navbar';
import "./Assets/Animation.scss";
import "./Assets/Style.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Trends />
      <Services />
      <About />
      <Projects />
      <Counter />
      <Fancy />
      <Customer />
      <Blogs />
      <Banner />
      <Footer />
    </>
  )
}

export default App;