import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Play, ArrowRight, Menu, X } from 'lucide-react'
import './App.css'

import heroImage from '/assets/Mining-in-Ghana-The-Key-Investment-Benefits-You-Need-to-Know.jpg'
import diamondImage from '/assets/2FPW5tLo73Lx.jpg'
import miningImage from '/assets/1280px-Gold_panning_at_Bonanza_Creek.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    product: "",
    quantity: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

const message = `
*📌 New Trade Inquiry*
━━━━━━━━━━━━━━━
🏢 Company: ${formData.company}
💎 Product: ${formData.product}
⚖️ Quantity: ${formData.quantity}
📧 Email: ${formData.email}
📝 Details: ${formData.details || "N/A"}
━━━━━━━━━━━━━━━
Sent via Hcein Overseas Website
`;

const phone = "919704602458";
const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
window.open(url, "_blank");

  };


  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed top-4 inset-x-4 sm:inset-x-6 lg:inset-x-8 z-50 rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <img src="/assets/logo.jpeg" alt="Logo" className="h-16 w-auto object-contain rounded-lg" />
              <h1 className="text-2xl md:text-3xl font-myfont font-bold tracking-tight text-gray-900">
                HCEIN OVERSEAS
              </h1>
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

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu (inside same rounded card) */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4 rounded-b-2xl bg-white">
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
                    className="flex w-full justify-start text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </nav>

      {/* SPACER — pushes content below fixed nav; grows when mobile menu is open */}
      <div className={`h-0 md:h-20 ${mobileMenuOpen ? 'h-[280px] md:h-20' : ''}`} />


      {/* Hero Section */}
      <section className="relative min-h-[100vh] bg-gray-900 overflow-hidden -mt-0 sm:-mt-24 lg:-mt-24">
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

<Button
  onClick={() => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
>
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

            {/* Left Column - Image */}
            <div>
              <img
                src={miningImage}
                alt="Global Commodities"
                className="rounded-lg shadow-lg md:h-[500px] h-[300px] w-full object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">About Hcein Overseas Pvt Ltd</h2>
              <p className="text-lg leading-relaxed mb-6">
                Trusted by jewelers, traders, and international investors, we specialize
                in cross-border trade of precious metals, certified diamonds, and
                industrial commodities. Our services are fully licensed and compliant
                with India's DGFT, GST, BIS, and international trade regulations.
                We manage end-to-end logistics, documentation, customs clearance,
                and secure delivery for partners worldwide.
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>Gold Bars (24K, 22K) & Raw Gold with LBMA-approved standards</li>
                <li>High-grade Silver Bars & Grains (999 purity) for investment & industry</li>
                <li>GIA/IGI-certified natural & lab-grown diamonds, conflict-free sourcing</li>
                <li>Coal imports & exports for industrial, power, and energy sectors</li>
                <li>Copper Cathodes & Wire (99.99% pure) from certified refineries</li>
                <li>Scrap Metal Exporting – reliable sourcing and global distribution</li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                With a global reach spanning UAE, Hong Kong, Singapore, Belgium,
                USA, and Myanmar, we ensure transparent pricing, ethical sourcing,
                and strong supplier partnerships to serve key industries including
                jewelry manufacturers, bullion traders, wholesalers, exporters,
                and industrial clients.
              </p>
            </div>
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

      {/* GOLD */}
      {/* GOLD */}
      <section
        id="gold"
        className="relative py-20 text-white px-4 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-yellow-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">Gold — 24K & 22K (LBMA-approved)</h2>
          <p className="text-lg mb-12 max-w-3xl">
            Direct sourcing from reputed mines and refineries with strict verification, purity control,
            and full compliance across documentation and logistics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Gold Bars (24K & 22K), LBMA-approved",
              "Raw Gold — purity & provenance records",
              "Competitive pricing with secure logistics",
              "Compliance with global trade & purity standards"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SILVER */}
      <section
        id="silver"
        className="relative py-20 text-white px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-gray-300 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">Silver — Bars & Grains (999)</h2>
          <p className="text-lg mb-12 max-w-3xl">
            High-grade silver for investment and industrial needs with consistent supply and on-time delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "999 purity bars and grains",
              "Reliable sourcing & steady supply chain",
              "Adherence to environmental & ethical practices",
              "Industrial & investment-grade requirements"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAMONDS */}
      <section
        id="diamonds"
        className="relative py-20 text-white px-4 bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-800"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-indigo-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">Diamonds — Certified & Lab-Grown</h2>
          <p className="text-lg mb-12 max-w-3xl">
            GIA/IGI-certified natural diamonds and high-quality lab-grown stones with conflict-free sourcing
            and customized B2B orders.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "GIA/IGI certification",
              "Conflict-free sourcing policies",
              "Natural & lab-grown options",
              "Custom sizes, cuts & assortments for retail/wholesale"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COPPER */}
      <section
        id="copper"
        className="relative py-20 text-white px-4 bg-gradient-to-b from-orange-900 via-orange-800 to-amber-700"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-orange-500 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">Copper — Cathodes & Wire (99.99% Pure)</h2>
          <p className="text-lg mb-12 max-w-3xl">
            Export-grade copper cathodes and wire sourced from certified refineries; reliable global export with timely delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "99.99% pure copper (cathodes & wire)",
              "Sourced from certified refineries",
              "Global exports with documentation support",
              "Suitable for electrical, industrial & manufacturing use"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COAL */}
      <section
        id="coal"
        className="relative py-20 text-white px-4 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-gray-800 h-1 w-32 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">Coal — Efficient Fuel Solutions</h2>
          <p className="text-lg mb-12 max-w-3xl">
            Sourced from reliable global suppliers with energy-grade consistency and quality assurance for industrial, power,
            and manufacturing sectors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Thermal coal supply",
              "Quality checks & grade consistency",
              "Support for power & industrial use",
              "End-to-end logistics & compliance"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
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
              { title: "Major Trade Partners", desc: "Africa, Myanmar and UAE are our Major Trade Patners." },
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

<form
  onSubmit={handleWhatsAppSubmit}
  className="max-w-3xl mx-auto mt-12 bg-gradient-to-tr from-emerald-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200 grid gap-6"
>
  {/* Heading */}
  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
    Request a Trade Quote
  </h3>
  <p className="text-gray-500 text-center mb-6">
    Fill out the form and we’ll connect with you on WhatsApp within 24 hours.
  </p>

  {/* Inputs */}
  <input
    type="text"
    name="company"
    placeholder="🏢 Company Name"
    value={formData.company}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800"
    required
  />

  <input
    type="text"
    name="product"
    placeholder="💎 Product Required (e.g. Gold 24K)"
    value={formData.product}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800"
    required
  />

  <input
    type="number"
    name="quantity"
    placeholder="⚖️ Quantity (grams/carat)"
    value={formData.quantity}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="📧 Your Email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800"
    required
  />

  <textarea
    name="details"
    placeholder="📝 Additional Details"
    value={formData.details}
    onChange={handleChange}
    rows={4}
    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800"
  ></textarea>

  {/* Submit Button */}
  <Button
    type="submit"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md w-full text-lg font-semibold transition-transform transform hover:scale-105"
  >
    🚀 Submit via WhatsApp
  </Button>
</form>




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
