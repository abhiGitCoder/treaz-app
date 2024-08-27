import React from 'react';

const Details: React.FC = () => {
  return (
    <section id="details" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Email</h3>
            <p><a href="mailto:wecare@treaz.in" className="text-blue-500 hover:underline">wecare@treaz.in</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
            <p><a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">License Information</h3>
            <p>License Number: ABC123456</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;