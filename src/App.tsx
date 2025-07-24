import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Play, ArrowRight, Menu, X } from 'lucide-react'
import './App.css'

// Import images
import heroImage from '/assets/c7HoyGMCv5Xi.jpg'
import diamondImage from '/assets/2FPW5tLo73Lx.jpg'
import miningImage from '/assets/w8I27yXbP6r8.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">DE BEERS GROUP</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About us', 'Our business', 'Sustainability', 'News & Insights', 'Careers'].map((item) => (
                <button key={item} className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ))}
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact us
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
              {['About us', 'Our business', 'Sustainability', 'News & Insights', 'Careers', 'Contact us'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="mb-4">
              <div className="inline-block bg-green-500 h-1 w-32 mb-4"></div>
              <p className="text-lg italic mb-8">From exploration to creation</p>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              THE WORLD'S<br />
              LEADING DIAMOND<br />
              COMPANY
            </h1>

            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
              Learn more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Side panels (hidden on mobile) */}
        <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
          {[
            { title: "THE WORLD'S LEADING DIAMOND COMPANY", subtitle: 'FROM EXPLORATION TO CREATION' },
            { title: 'TALENT UNEARTHED', subtitle: "CELEBRATING BOTSWANA'S EXCEPTIONAL ATHLETES" },
            { title: 'FORGING A BRIGHTER FUTURE', subtitle: 'BUILDING FOREVER' },
          ].map((panel, i) => (
            <div key={i} className="bg-gray-800 bg-opacity-80 text-white p-6 w-80">
              <div className="text-sm text-gray-300 mb-2">{panel.subtitle}</div>
              <h3 className="text-xl font-bold mb-4">{panel.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-green-500 h-1 w-32 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-lg leading-relaxed">
              We are the world's leading diamond company with expertise that spans the global diamond value chain. From responsible discovery and recovery to cutting-edge diamond tech and jewellery retail, we help shape the future of this timeless gem.
            </p>
            <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white">
              About us
            </Button>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-12">NEWS & INSIGHTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[diamondImage, miningImage, null].map((img, i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
                {img ? (
                  <img src={img} alt="News" className="w-full h-48 object-cover" />
                ) : (
                  <div className="bg-blue-600 h-48 flex items-center justify-center text-center p-4">
                    <div>
                      <div className="text-sm mb-2">12 MAY 2025</div>
                      <h3 className="text-lg font-bold">NAMDEB AND NAMPOWER SIGN MOU TO POWER OPERATIONS WITH WIND ENERGY</h3>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  {img && (
                    <>
                      <div className="text-sm text-gray-400 mb-2">
                        {i === 0 ? '18 JUN 2025' : '06 JUN 2025'}
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {i === 0
                          ? 'EMMANUELLE NODALE APPOINTED BRAND CEO, DE BEERS LONDON'
                          : "DE BEERS LAUNCHES 'OMBRÉ DESERT DIAMONDS' JEWELLERY BEACON"}
                      </h3>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={diamondImage} alt="Journey" className="w-full rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-4">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-orange-500 h-1 w-32 mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">THE JOURNEY OF A NATURAL DIAMOND</h2>
              <p className="text-lg mb-8">De Beers is intimately connected with the life of natural diamonds, from the moment they're discovered deep in the earth, to their rebirth as symbols of timeless beauty.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Explore our business in depth</Button>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white">
                  Watch video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR IMPACT AT A GLANCE</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">As the world's leading diamond company, our impact is felt across the world – in our own industry, and in the communities and countries where we operate.</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'OF THE GLOBAL SUPPLY OF ROUGH DIAMONDS', value: '33%' },
              { label: 'YEARS OF DIAMOND EXPERTISE', value: '136' },
              { label: 'TOTAL TAX AND ECONOMIC CONTRIBUTION IN 2024', value: '$2,858m' },
              { label: 'COUNTRIES WHERE OUR PEOPLE WORK', value: '18' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-gray-900 mb-2">{item.value}</div>
                <p className="text-sm text-gray-600 uppercase">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Learn more about our unique business
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-800 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">OUR BRANDS</h2>
          <p className="text-lg mb-12">Explore our global diamond brands trusted by millions</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            <img src="/assets/brand1.png" alt="Brand 1" className="h-16 mx-auto" />
            <img src="/assets/brand2.png" alt="Brand 2" className="h-16 mx-auto" />
            <img src="/assets/brand3.png" alt="Brand 3" className="h-16 mx-auto" />
            <img src="/assets/brand4.png" alt="Brand 4" className="h-16 mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-gray-800 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">WHERE WE OPERATE</h2>
          <p className="text-center text-lg mb-8">Our global footprint spans continents</p>
          <img src="/assets/world-map.png" alt="Global Map" className="mx-auto rounded shadow" />
        </div>
      </section>

      <section className="py-20 bg-white text-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">VOICES OF IMPACT</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow">
              <p className="italic mb-4">“Working with De Beers changed my village’s future.”</p>
              <p className="font-bold">– Thabo, Botswana Community Leader</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <p className="italic mb-4">“Sustainability is not just a promise, it’s action here.”</p>
              <p className="font-bold">– Alicia, Sustainability Manager</p>
            </div>
          </div>
        </div>
      </section>


      {/* ✅ Building Forever Section */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-500 h-1 w-32 mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">BUILDING FOREVER</h2>
              <h3 className="text-2xl font-bold mb-6">OUR SUSTAINABILITY STRATEGY</h3>
              <p className="text-lg mb-8">
                Our sustainability strategy, Building Forever, is focused on three areas: Livelihoods, Climate and Nature. These areas are all underpinned by Provenance – our aim to enhance transparency and traceability across the journey of our diamonds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'PROVENANCE', desc: 'Enhancing transparency of diamond provenance', color: 'bg-red-900' },
                { title: 'LIVELIHOODS', desc: 'Supporting brighter futures through diamonds', color: 'bg-gray-700' },
                { title: 'NATURE', desc: 'Restoring and protecting biodiversity', color: 'bg-green-800' },
                { title: 'CLIMATE', desc: 'Innovative thinking and pioneering partnerships', color: 'bg-blue-800' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-6 text-center rounded`}>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-900 text-white px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-6 text-gray-300">Get the latest news, stories, and updates from De Beers</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded text-black" />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            Back to top
          </Button>

          <div className="mt-8 space-y-4">
            <p className="text-sm text-gray-300">
              De Beers Group has been shaping the future of diamonds since 1888 — committed to integrity, sustainability,
              and delivering brilliance to every corner of the world.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Use</a>
              <a href="#" className="hover:text-white transition">Sustainability</a>
              <a href="#" className="hover:text-white transition">Careers</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} De Beers Group. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
