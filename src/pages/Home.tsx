import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Social from '../components/Social';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Review from './Review';

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <section id="products" className="py-16">
        <Products />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services" className="py-16">
        <Services />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>
      <section id="social" className="py-16">
        <Social />
      </section>
      <section id="details" className="py-16">
        <Details />
      </section>
      <section id="testimonials" className="py-16">
        <Testimonials />
      </section>
      <section id="write-a-review" className="py-16">
        <Review />
      </section>
    </div>
  );
};

export default HomePage;
