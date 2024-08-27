import React, { useState } from 'react';
import { banner } from '../utils/data'; 

const Products: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    bottleName: ''
  });
  const [message, setMessage] = useState('');

  const products = [
    { name: 'Natural Spring Water', size: '500ml', image: banner },
    { name: 'Still Mineral Water', size: '750ml', image: banner },
    { name: 'Sparkling Mineral Water', size: '1L', image: banner },
  ];

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsPopupOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would handle form submission, e.g., sending data to a server
    setMessage('Your order has been placed successfully!');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      bottleName: ''
    });
    setIsPopupOpen(false);
  };

  return (
    <section id="products" className="py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-12 text-center font-MontBold">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[80%] mb-4 rounded-md duration-300"
              />
              <h3 className="text-2xl text-center font-MontSemibold mb-2">{product.name}</h3>
              <p className="font-MontRegular text-center text-lg">{product.size}</p>
              <button 
                onClick={() => handleOrderClick(product.name)}
                className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-MontBold mb-4">Order {selectedProduct}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bottleName" className="block text-gray-700 font-medium mb-1">Name on the Bottle</label>
                <input 
                  type="text" 
                  id="bottleName" 
                  name="bottleName" 
                  value={formData.bottleName} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Submit Order
              </button>
            </form>
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
