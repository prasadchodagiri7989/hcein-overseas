import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Play, ArrowRight, Menu, X } from 'lucide-react'
import './App.css'

import heroImage from '/assets/c7HoyGMCv5Xi.jpg'
import diamondImage from '/assets/2FPW5tLo73Lx.jpg'
import miningImage from '/assets/w8I27yXbP6r8.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Lorem Ipsum</h1>

            <div className="hidden md:flex items-center space-x-8">
              {['Lorem', 'Ipsum', 'Dolor', 'Sit Amet', 'Consectetur'].map((item) => (
                <button key={item} className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ))}
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Adipiscing
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
              {['Lorem', 'Ipsum', 'Dolor', 'Sit Amet', 'Consectetur', 'Adipiscing'].map((item) => (
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
      <section className="relative min-h-[100vh] bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-4xl mx-auto pt-20 md:pt-32">
          <div className="mb-4">
            <div className="inline-block bg-green-500 h-1 w-32 mb-4"></div>
            <p className="text-lg italic mb-8">Lorem ipsum dolor sit amet</p>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
            LOREM<br />
            IPSUM DOLOR<br />
            SIT AMET
          </h1>

          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Side Panels */}
      <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-[65%] z-0 w-80">
        {[
          { title: "LOREM IPSUM", subtitle: 'DOLOR SIT AMET' },
          { title: 'SED DO EIUSMOD', subtitle: "TEMPOR INCIDIDUNT" },
          { title: 'UT LABORE ET DOLORE', subtitle: 'MAGNA ALIQUA' },
        ].map((panel, i) => (
          <div key={i} className="bg-gray-800 bg-opacity-80 text-white p-6 rounded">
            <div className="text-sm text-gray-300 mb-2">{panel.subtitle}</div>
            <h3 className="text-xl font-bold">{panel.title}</h3>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-green-500 h-1 w-32 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white">
              About Us
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
                      <h3 className="text-lg font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h3>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
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
              <h2 className="text-4xl font-bold mb-6">LOREM JOURNEY</h2>
              <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Explore More</Button>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white">
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR IMPACT</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada nisi in neque blandit consequat.</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'GLOBAL IMPACT', value: '33%' },
              { label: 'YEARS EXPERIENCE', value: '136' },
              { label: 'ECONOMIC VALUE', value: '$2,858m' },
              { label: 'COUNTRIES REACHED', value: '18' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-gray-900 mb-2">{item.value}</div>
                <p className="text-sm text-gray-600 uppercase">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Building Forever */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-500 h-1 w-32 mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">BUILDING FOREVER</h2>
              <h3 className="text-2xl font-bold mb-6">OUR STRATEGY</h3>
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non felis libero. Cras fermentum orci in tellus blandit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'TRANSPARENCY', desc: 'Ensuring clarity and trust', color: 'bg-red-900' },
                { title: 'OPPORTUNITY', desc: 'Creating better futures', color: 'bg-gray-700' },
                { title: 'NATURE', desc: 'Protecting the planet', color: 'bg-green-800' },
                { title: 'CLIMATE', desc: 'Driving innovation', color: 'bg-blue-800' },
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

      {/* Subscribe */}
      <section className="py-16 bg-gray-900 text-white px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-gray-300">Subscribe to receive news and updates</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded text-black" />
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
            Back to Top
          </Button>

          <div className="mt-8 space-y-4">
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Impact</a>
              <a href="#" className="hover:text-white transition">Jobs</a>
              <a href="#" className="hover:text-white transition">Help</a>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} Lorem Ipsum Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
