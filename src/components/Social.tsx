import React from 'react';

const Social: React.FC = () => {
  const socialLinks = [
    { name: 'Email', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png', url: 'mailto:wecare@treaz.in' },
    { name: 'WhatsApp', icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', url: 'https://wa.me/1234567890' },
    { name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/733/733614.png', url: 'https://instagram.com/treaz' },
    { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', url: 'https://facebook.com/treaz' },
    { name: 'X', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/70px-X_logo_2023.svg.png', url: 'https://twitter.com/treaz' },
  ];

  return (
    <section id="social" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="flex flex-col items-center" title={link.name}>
              <img src={link.icon} alt={link.name} className="w-10 h-10 mb-2" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;