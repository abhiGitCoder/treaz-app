import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "The customized water bottles from Treaz have made a big difference in our brand's presence. Our clients love the unique touch!", author: "Jane Doe, XYZ Company" },
    { text: "We've been using Treaz for our events, and the quality of their water and service is unmatched. Highly recommend!", author: "Frayan, Event Organizer" },
    { text: "The personalized water bottles were a huge hit at our conference. Treaz delivered on time and exceeded our expectations.", author: "Emily Johnson, Conference Planner" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-tr from-purple-100 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <cite className="block text-right text-blue-600 font-semibold">- {testimonial.author}</cite>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/reviews" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition duration-300">
            See All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
