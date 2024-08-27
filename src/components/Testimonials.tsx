import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "The customized water bottles from Treaz have made a big difference in our brand's presence. Our clients love the unique touch!", author: "Jane Doe, XYZ Company" },
    { text: "We've been using Treaz for our events, and the quality of their water and service is unmatched. Highly recommend!", author: "Frayan, Event Organizer" },
    { text: "The personalized water bottles were a huge hit at our conference. Treaz delivered on time and exceeded our expectations.", author: "Emily Johnson, Conference Planner" },
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"{testimonial.text}"</p>
              <cite className="block text-right">- {testimonial.author}</cite>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/reviews" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            See All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
