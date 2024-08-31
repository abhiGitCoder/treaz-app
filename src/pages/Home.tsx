import React from 'react';
import Banner from '../components/Banner';
import HomeProducts from '../components/HomeProducts';
import CustomizedBottle from '../components/CustomizedBottle';
import About from '../components/About';
import Services from '../components/Services';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Review from './Review';

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <section id="products">
        <HomeProducts />
      </section>
      <section id="customize-bottle">
        <CustomizedBottle />
      </section>
      <section id="services" >
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="write-a-review">
        <Review />
      </section>
      <section id="details">
        <Details />
      </section>
    </div>
  );
};

export default HomePage;