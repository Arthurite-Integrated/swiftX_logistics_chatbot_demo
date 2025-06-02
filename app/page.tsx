import Image from "next/image"
import Link from "next/link"
import { Globe, Truck, Package, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Using the actual image */}
      <section className="relative">
        <Image
          src="/images/hero-section.png"
          alt="SwiftX Logistics Hero Section"
          width={1400}
          height={800}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Features Section with Cards */}
      <section className="py-16 px-4 bg-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-600 rounded-lg p-6 text-white">
              <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-sm opacity-90">
                Your shipment, our priority. 24/7 support for a seamless logistics experience. Contact us anytime!
              </p>
            </div>

            <div className="bg-red-600 rounded-lg p-6 text-white">
              <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Global Shipping</h3>
              <p className="text-sm opacity-90">
                Connecting businesses to the world. Reliable global shipping services for a seamless international trade
                experience.
              </p>
            </div>

            <div className="bg-red-600 rounded-lg p-6 text-white">
              <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Online Delivery</h3>
              <p className="text-sm opacity-90">
                Fast, secure, and reliable online delivery services. Track your shipments in real-time with our advanced
                system.
              </p>
            </div>

            <div className="bg-red-600 rounded-lg p-6 text-white">
              <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Qualified Professionals</h3>
              <p className="text-sm opacity-90">
                Experienced and certified logistics professionals ensuring your cargo reaches its destination safely and
                on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Logistics Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive logistics solutions tailored to meet your business needs. From air freight to
              land freight, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/airfreight-service.png"
                alt="Airfreight service - cargo airplane loading"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-red-600 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Airfreight</h3>
                <p className="text-gray-600 mb-4">
                  Fast and secure air cargo services connecting Africa to the world with reliable delivery schedules.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Read More</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/landfreight-service.png"
                alt="Landfreight service - freight truck on highway"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-red-600 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Landfreight</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive road transport solutions for domestic and cross-border cargo movement across Africa.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Read More</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/ecommerce-service.png"
                alt="E-Commerce service - warehouse packaging"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-red-600 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Specialized e-commerce logistics solutions for online businesses with last-mile delivery excellence.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">25,000</div>
              <div className="text-purple-200">Packages Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">360,000</div>
              <div className="text-purple-200">Tons of Goods</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7,000</div>
              <div className="text-purple-200">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,070</div>
              <div className="text-purple-200">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">WE OFFER BEST LOGISTIC PROVIDER FOR OUR CLIENTS</h2>
              <p className="text-gray-600 mb-8">
                As a leading logistics provider, we are committed to delivering professional services that exceed
                expectations. Our team of experts ensures your cargo reaches its destination safely and on time.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Reliable and efficient logistics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Advanced tracking systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Secure and safe logistics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Real-time tracking</span>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/logistics-operations.png"
                alt="Modern logistics warehouse operations"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SwiftX Logistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">WHY CHOOSE SWIFTXLOGISTICS</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-black rounded-lg p-6 text-white">
              <div className="mb-4">
                <Package className="h-12 w-12 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Fast Shipping Service</h3>
              <p className="text-sm text-gray-300">
                Quick and reliable shipping solutions for all your logistics needs across Africa and beyond.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="mb-4">
                <Globe className="h-12 w-12 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Worldwide Procurement</h3>
              <p className="text-sm text-gray-300">
                Global procurement services connecting you to suppliers and markets worldwide.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="mb-4">
                <Truck className="h-12 w-12 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Fast Delivery Service</h3>
              <p className="text-sm text-gray-300">
                Express delivery services ensuring your packages reach their destination on time.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="mb-4">
                <Users className="h-12 w-12 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Ship Freighting Service</h3>
              <p className="text-sm text-gray-300">
                Professional sea freight services for large cargo and international shipping needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Clients</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Client Logo 1</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Client Logo 2</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Client Logo 3</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Client Logo 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-16 px-4 bg-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/professional-team.png"
                alt="Professional logistics team member"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>

            <div className="bg-purple-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">REQUEST A FREE QUOTE</h2>

              <form className="space-y-4">
                <input type="text" placeholder="Company Name" className="w-full p-3 rounded border border-gray-300" />
                <input type="email" placeholder="Email Address" className="w-full p-3 rounded border border-gray-300" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded border border-gray-300" />
                <select className="w-full p-3 rounded border border-gray-300">
                  <option>Select Service</option>
                  <option>Airfreight</option>
                  <option>Landfreight</option>
                  <option>E-Commerce</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 rounded border border-gray-300"
                ></textarea>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">REQUEST QUOTE</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-red-600">"</span>TESTIMONIAL
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                "SwiftX Logistics has been our trusted logistics partner for over 3 years. Their professional service
                and reliable delivery have helped our business grow exponentially. We highly recommend their services to
                any business looking for dependable logistics solutions."
              </p>
              <div className="font-semibold">
                <p>John Okafor</p>
                <p className="text-gray-400">CEO, Trade Solutions Ltd</p>
              </div>
            </div>

            <div>
              <Image
                src="/images/client-testimonial.png"
                alt="John Okafor - CEO, Trade Solutions Ltd"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-8 px-4 bg-red-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image
              src="/images/delivery-van.png"
              alt="SwiftX Logistics delivery van"
              width={100}
              height={60}
              className="rounded"
            />
            <div>
              <p className="text-sm">Call us for any inquiry and we serve 24/7</p>
              <p className="text-2xl font-bold">+234 909 596 6867</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Swift</span>
                <span className="text-red-600">X</span>
                <div className="text-xs text-gray-300 tracking-wider">LOGISTICS</div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                We specialize in shipping and logistics services across Africa and beyond.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">QUICK LINKS</h3>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block hover:text-red-400">
                  About
                </Link>
                <Link href="#" className="block hover:text-red-400">
                  Services
                </Link>
                <Link href="#" className="block hover:text-red-400">
                  Contact
                </Link>
                <Link href="#" className="block hover:text-red-400">
                  Track
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">NEWS LETTER</h3>
              <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for updates and special offers.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="flex-1 p-2 rounded-l text-black" />
                <Button className="bg-red-600 hover:bg-red-700 rounded-l-none">Subscribe</Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">CONTACT INFO</h3>
              <div className="space-y-2 text-sm">
                <p>+234 909 596 6867</p>
                <p>info@swiftxlogistics.com.ng</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 SwiftX Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
