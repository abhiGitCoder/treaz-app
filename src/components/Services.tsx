import React from 'react';

const Services: React.FC = () => {
  const services = [
    { name: 'Custom Branded Bottle 1', image: 'path_to_image1.jpg' },
    { name: 'Custom Branded Bottle 2', image: 'path_to_image2.jpg' },
    { name: 'Custom Branded Bottle 3', image: 'path_to_image3.jpg' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <p className="text-lg text-center mb-12">
          We specialize in customizing packed water with your own brand for a unique touch. Whether you're looking to enhance your brand visibility or offer a personalized touch to your customers, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-center">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;