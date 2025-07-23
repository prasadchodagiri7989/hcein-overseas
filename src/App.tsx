import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Play, ArrowRight } from 'lucide-react'
import './App.css'

// Import images
import heroImage from '/assets/c7HoyGMCv5Xi.jpg'
import diamondImage from '/assets/2FPW5tLo73Lx.jpg'
import miningImage from '/assets/w8I27yXbP6r8.jpg'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">DE BEERS GROUP</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  About us
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Our business
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Sustainability
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  News & Insights
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Careers
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="mb-4">
              <div className="inline-block bg-green-500 h-1 w-32 mb-4"></div>
              <p className="text-lg italic mb-8">From exploration to creation</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
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

        {/* Side panels */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
          <div className="bg-gray-800 bg-opacity-80 text-white p-6 w-80">
            <div className="text-sm text-gray-300 mb-2">FROM EXPLORATION TO CREATION</div>
            <h3 className="text-xl font-bold mb-4">THE WORLD'S LEADING DIAMOND COMPANY</h3>
          </div>
          
          <div className="bg-gray-800 bg-opacity-80 text-white p-6 w-80">
            <div className="text-sm text-gray-300 mb-2">CELEBRATING BOTSWANA'S EXCEPTIONAL ATHLETES</div>
            <h3 className="text-xl font-bold mb-4">TALENT UNEARTHED</h3>
          </div>
          
          <div className="bg-gray-800 bg-opacity-80 text-white p-6 w-80">
            <div className="text-sm text-gray-300 mb-2">BUILDING FOREVER</div>
            <h3 className="text-xl font-bold mb-4">FORGING A BRIGHTER FUTURE</h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-green-500 h-1 w-32 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                We are the world's leading diamond company with expertise that spans the global diamond value chain. 
                From the responsible discovery and recovery of diamonds to retail jewellery expertise, and from rough 
                diamond sales to innovative diamond technology, we offer a range of sector-leading products and services. 
                Synonymous with diamonds since our foundation in 1888, today our international business produces around 
                a third of the global supply of rough diamonds. With our commitment to sustainability enshrined in our 
                Building Forever approach, we are proud that our diamonds not only celebrate life's greatest moments, 
                but also help to drive development.
              </p>
            </div>
            <div>
              <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white">
                About us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-12">NEWS & INSIGHTS</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={diamondImage} alt="Diamond" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">18 JUN 2025</div>
                <h3 className="text-xl font-bold mb-4">EMMANUELLE NODALE APPOINTED BRAND CEO, DE BEERS LONDON</h3>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={miningImage} alt="Mining" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">06 JUN 2025</div>
                <h3 className="text-xl font-bold mb-4">DE BEERS LAUNCHES 'OMBRÉ DESERT DIAMONDS' JEWELLERY BEACON AND 'ORIGIN – DE BEERS GROUP' POLISHED DIAMONDS</h3>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-blue-600 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm mb-2">12 MAY 2025</div>
                  <h3 className="text-lg font-bold">NAMDEB AND NAMPOWER SIGN MOU TO POWER OPERATIONS WITH WIND ENERGY</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={diamondImage} alt="Diamond Journey" className="w-full rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-4">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-orange-500 h-1 w-32 mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">THE JOURNEY OF A NATURAL DIAMOND</h2>
              <p className="text-lg mb-8">
                De Beers is intimately connected with the life of natural diamonds, from the moment they're 
                discovered deep in the earth, to their rebirth as symbols of timeless beauty.
              </p>
              <div className="space-y-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Explore our business in depth
                </Button>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white ml-4">
                  Watch video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR IMPACT AT A GLANCE</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            As the world's leading diamond company, our impact is felt across the world – in our own industry, 
            and in the communities and countries where we operate.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">33<span className="text-3xl">%</span></div>
              <p className="text-sm text-gray-600 uppercase">OF THE GLOBAL SUPPLY OF ROUGH DIAMONDS</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">136</div>
              <p className="text-sm text-gray-600 uppercase">YEARS OF DIAMOND EXPERTISE</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">$2,858<span className="text-3xl">m</span></div>
              <p className="text-sm text-gray-600 uppercase">TOTAL TAX AND ECONOMIC CONTRIBUTION IN 2024</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">18</div>
              <p className="text-sm text-gray-600 uppercase">COUNTRIES WHERE OUR PEOPLE WORK</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Learn more about our unique business
            </Button>
          </div>
        </div>
      </section>

      {/* Building Forever Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-500 h-1 w-32 mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">BUILDING FOREVER</h2>
              <h3 className="text-2xl font-bold mb-6">OUR SUSTAINABILITY STRATEGY</h3>
              <p className="text-lg mb-8">
                Our sustainability strategy, Building Forever, is focused on three areas: Livelihoods, Climate and Nature. 
                These areas are all underpinned by Provenance – our aim to enhance transparency and traceability across 
                the journey of our diamonds.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-900 p-6 text-center">
                <h4 className="font-bold mb-2">PROVENANCE</h4>
                <p className="text-sm">Enhancing transparency of diamond provenance</p>
              </div>
              
              <div className="bg-gray-700 p-6 text-center">
                <h4 className="font-bold mb-2">LIVELIHOODS</h4>
                <p className="text-sm">Supporting brighter futures through diamonds</p>
              </div>
              
              <div className="bg-green-800 p-6 text-center">
                <h4 className="font-bold mb-2">NATURE</h4>
                <p className="text-sm">Restoring and protecting biodiversity</p>
              </div>
              
              <div className="bg-blue-800 p-6 text-center">
                <h4 className="font-bold mb-2">CLIMATE</h4>
                <p className="text-sm">Innovative thinking and pioneering partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Back to top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

