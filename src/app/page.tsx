import { Coffee, Clock, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const menuItems = [
    { name: "Espresso", price: "$3.50", desc: "Rich and bold single shot" },
    { name: "Cappuccino", price: "$4.50", desc: "Espresso with steamed milk foam" },
    { name: "Avocado Toast", price: "$8.00", desc: "Sourdough with avocado, cherry tomatoes" },
    { name: "Blueberry Muffin", price: "$3.75", desc: "Freshly baked daily" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333]">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image 
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000&auto=format" 
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Brew & Bites</h1>
            <p className="text-xl md:text-2xl mb-8">Artisanal coffee and homemade pastries</p>
            <button className="bg-[#d4a762] hover:bg-[#c09555] text-white font-bold py-3 px-8 rounded-full text-lg transition">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1000&auto=format" 
              alt="Coffee beans"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Brew & Bites started as a small coffee cart downtown. 
              Today we're proud to serve our community with ethically sourced coffee 
              and locally baked goods in a warm, welcoming space.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Coffee className="text-[#d4a762]" size={24} />
                <span>Specialty grade coffee beans</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#d4a762]" size={24} />
                <span>Open daily from 7am to 7pm</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#d4a762]" size={24} />
                <span>123 Main Street, Downtown</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-[#fff] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[#d4a762] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-[#d4a762] text-[#d4a762] hover:bg-[#d4a762] hover:text-white font-bold py-2 px-8 rounded-full transition">
              Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={`https://images.unsplash.com/photo-${150 + item}5116572660-236099ec97a0?w=1000&auto=format`}
                alt={`Cafe image ${item}`}
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brew & Bites</h3>
            <p className="text-gray-400">
              123 Main Street<br />
              Downtown, City<br />
              (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-400">
              Monday - Friday: 7am - 7pm<br />
              Saturday - Sunday: 8am - 6pm
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#d4a762] transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#d4a762] transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#d4a762] transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}