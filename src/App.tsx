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
          <div className="flex justify-between items-center h-28">
            
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img src="/assets/logo.jpeg" alt="Logo" className="h-28 w-auto object-contain" />
              <h1 className="text-2xl font-bold text-gray-900">Gold & Diamond Trade</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Exports', 'Imports', 'Compliance', 'Contact'].map((item) => {
                const link = item.toLowerCase()
                return (
                  <button
                    key={item}
                    onClick={() => {
                      const section = document.getElementById(link)
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' })
                        setMobileMenuOpen(false)
                      }
                    }}
                    className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
              {['About', 'Exports', 'Imports', 'Compliance', 'Contact'].map((item) => {
                const link = item.toLowerCase()
                return (
                  <button
                    key={item}
                    onClick={() => {
                      const section = document.getElementById(link)
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' })
                        setMobileMenuOpen(false)
                      }
                    }}
                    className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </button>
                )
              })}
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
            <p className="text-lg italic mb-8">Importer & Exporter of Gold, Silver & Certified Diamonds</p>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
            COMPLIANT. TRUSTED.<br />
            GLOBAL PRECIOUS TRADE
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
          { title: "LICENSED EXPORTS", subtitle: 'DGFT, BIS, Customs Compliant' },
          { title: 'GLOBAL NETWORK', subtitle: "UAE, USA, Belgium & More" },
          { title: 'END-TO-END HANDLING', subtitle: 'Logistics, Customs & Docs' },
        ].map((panel, i) => (
          <div key={i} className="bg-gray-800 bg-opacity-80 text-white p-6 rounded">
            <div className="text-sm text-gray-300 mb-2">{panel.subtitle}</div>
            <h3 className="text-xl font-bold">{panel.title}</h3>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-green-500 h-1 w-32 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-lg leading-relaxed">
              Trusted by jewelers, traders, and international investors, we specialize in cross-border trade of precious metals and gemstones. Our services are licensed and fully compliant with India's DGFT, GST, BIS, and global trade laws. We manage end-to-end logistics, documentation, and customs handling for our partners worldwide.
            </p>
            <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white">
              About Us
            </Button>
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
              <h2 className="text-4xl font-bold mb-6">OUR TRADE JOURNEY</h2>
              <p className="text-lg mb-8">
                Exporting gold bars, silver grains, and certified diamonds to UAE, Hong Kong, Singapore, Belgium, and USA. We import raw metals and custom-cut diamonds from authorized refineries and global suppliers.
              </p>
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

      {/* Impact Section */}
      <section id="exports" className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR EXPORTS & IMPORTS</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            We handle bulk orders, certified precious materials, and high-value transactions under RBI and customs norms. Our B2B services include customizable packaging and reliable delivery for global partners.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Gold Bars (24K, 22K)', value: 'EXPORT' },
              { label: 'Silver Bars & Grains (999)', value: 'EXPORT' },
              { label: 'Certified Diamonds (GIA/IGI)', value: 'EXPORT' },
              { label: 'Raw Gold & Custom Diamonds', value: 'IMPORT' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
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

      <section id="compliance" className="py-20 bg-white text-gray-900 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Certified Trade Partner", desc: "DGFT, BIS, and global compliance ensured." },
              { title: "Trusted Global Network", desc: "Backed by relationships across UAE, Belgium & USA." },
              { title: "End-to-End Logistics", desc: "From documentation to secure delivery, we handle it all." },
              { title: "LBMA-approved Sources", desc: "Sourced gold and silver from reputed refiners." },
              { title: "Dedicated B2B Support", desc: "Account managers for your trade needs." },
              { title: "Transparent Pricing", desc: "Live-linked global pricing benchmarks." },
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-green-500 h-1 w-32 mb-8 mx-auto"></div>
          <h2 className="text-4xl font-bold mb-4">Request a Trade Quote</h2>
          <p className="mb-6 text-gray-300">Share your requirements and we’ll get back to you within 24 hours.</p>
          <form className="grid gap-4 text-left">
            <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded text-black" />
            <input type="text" placeholder="Product Required (e.g. Gold 24K)" className="w-full px-4 py-3 rounded text-black" />
            <input type="number" placeholder="Quantity (in grams/carat)" className="w-full px-4 py-3 rounded text-black" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded text-black" />
            <textarea placeholder="Additional Details" className="w-full px-4 py-3 rounded text-black"></textarea>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">Submit Inquiry</Button>
          </form>
        </div>
      </section>


      <section className="py-20 bg-white text-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you provide documentation and customs clearance?",
                a: "Yes, we handle end-to-end documentation, RBI clearance, and customs compliance for all shipments."
              },
              {
                q: "Are your diamonds certified?",
                a: "All our diamonds are GIA or IGI certified, and come with digital and hard copy certification."
              },
              {
                q: "Can I request packaging with my company logo?",
                a: "Yes, we offer private labeling and custom packaging for B2B bulk clients."
              },
              {
                q: "What are your payment terms?",
                a: "We offer flexible trade terms, including advance payment, LC, and escrow depending on order type."
              },
            ].map((faq, i) => (
              <div key={i} className="border-b pb-4">
                <h4 className="text-xl font-semibold">{faq.q}</h4>
                <p className="text-gray-700 mt-2">{faq.a}</p>
              </div>
            ))}
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
              Licensed importer and exporter of gold, silver, and certified diamonds. Your trusted global trade partner.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Trade Laws</a>
              <a href="#" className="hover:text-white transition">Compliance</a>
              <a href="#" className="hover:text-white transition">Support</a>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} Global Precious Trade Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
