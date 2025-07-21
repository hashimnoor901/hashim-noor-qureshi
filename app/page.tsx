
'use client';

import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '923116662412'; // WhatsApp format
    const message = 'Hi Hashim, I would like to discuss a project opportunity with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const subject = 'Project Inquiry';
    const body = 'Hi Hashim,%0A%0AI would like to discuss a project opportunity with you.%0A%0ABest regards';
    const emailUrl = `mailto:hashimn901@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.open(emailUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm md:hidden">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">Hashim Noor</div>
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 py-4">
            <div className="px-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer" onClick={toggleMobileMenu}>
                Services
              </a>
              <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer" onClick={toggleMobileMenu}>
                Projects
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer" onClick={toggleMobileMenu}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:bg-white/95 md:backdrop-blur-md md:shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900">Hashim Noor</div>
            <div className="flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-32 md:pt-20 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-800/70 to-cyan-900/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-300/20 rounded-full blur-xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Mobile: Image First */}
            <div className="lg:hidden w-full flex justify-center mb-8">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="../assets/images/hashim.jpeg"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-white text-2xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="ri-reactjs-line text-white text-xl"></i>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Front-End Developer
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8">
                React.js & Vue.js Specialist | Figma-to-Code Expert
              </p>
              <p className="text-lg text-gray-200 mb-12 leading-relaxed">
                Hi, I'm <strong>Hashim Noor</strong>, a passionate Front-End Developer with expertise in React.js, Vue.js, and modern web development. I specialize in transforming Figma/PSD designs into high-performance, responsive web applications with clean, scalable code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium cursor-pointer whitespace-nowrap transition-colors">
                  View My Work
                </a>
                <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium cursor-pointer whitespace-nowrap transition-colors">
                  Let's Connect
                </a>
              </div>
            </div>

            {/* Desktop: Image on Right */}
            <div className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20portrait%2C%20young%20man%20with%20friendly%20smile%2C%20wearing%20casual%20shirt%2C%20clean%20background%2C%20confident%20pose%2C%20modern%20lighting%2C%20high%20quality%20headshot%20photo%20suitable%20for%20portfolio%20website&width=400&height=400&seq=developer-portrait-001&orientation=squarish"
                    alt="Hashim Noor - Front-End Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-white text-2xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="ri-reactjs-line text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive front-end development services to bring your designs to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-palette-line text-emerald-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pixel-Perfect Conversions</h3>
              <p className="text-gray-600">Transform your Figma/XD/PSD designs into responsive React/Vue applications with meticulous attention to detail.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsive Development</h3>
              <p className="text-gray-600">Mobile-first development with Tailwind CSS & Bootstrap ensuring perfect display across all devices.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-code-box-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Component Architecture</h3>
              <p className="text-gray-600">Clean, scalable code using React Hooks and Vue 3 Composition API for maintainable applications.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-database-2-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Integration</h3>
              <p className="text-gray-600">Seamless integration with Rails APIs, MySQL databases, and RESTful services.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-speed-up-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">SEO optimization, lazy loading, and SSR-ready code for lightning-fast applications.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-tools-line text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Tooling</h3>
              <p className="text-gray-600">Utilizing latest tools like Git, Docker, Figma, and deployment platforms for efficient workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-600">Technologies I work with to build amazing web applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <i className="ri-reactjs-line text-blue-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">React.js</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <i className="ri-vuejs-line text-green-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Vue.js</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <i className="ri-javascript-line text-yellow-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">JavaScript</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                  <i className="ri-html5-line text-orange-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">HTML5</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                  <i className="ri-css3-line text-purple-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">CSS3</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
                  <i className="ri-bootstrap-line text-indigo-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Bootstrap</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-cyan-50 rounded-lg">
                  <i className="ri-tailwind-css-line text-cyan-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">UI Frameworks</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <i className="ri-material-line text-blue-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Material-UI</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <i className="ri-layout-line text-gray-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Ant Design</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <i className="ri-palette-line text-green-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Chakra UI</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Backend & Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                  <i className="ri-ruby-line text-red-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Ruby</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                  <i className="ri-database-2-line text-red-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Ruby on Rails</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                  <i className="ri-database-line text-orange-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">MySQL</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                  <i className="ri-database-line text-teal-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">SQL</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <i className="ri-git-branch-line text-gray-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Git</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
                  <i className="ri-computer-line text-indigo-600 text-2xl"></i>
                  <span className="font-medium text-gray-900">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience Highlights</h2>
            <p className="text-xl text-gray-600">My journey with leading tech companies</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-emerald-600 text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Octaloop Technologies</h3>
                  <p className="text-gray-600 mb-4">Built React-based SaaS dashboards with <strong>30% faster load times</strong> through optimized component architecture and efficient state management.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">SaaS</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Performance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                  <i className="ri-robot-line text-teal-600 text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trixly AI Solutions</h3>
                  <p className="text-gray-600 mb-4">Developed <strong>Vue 3 + Rails</strong> analytics platforms with real-time data visualization using WebSocket integration for live updates.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Rails</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">WebSocket</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-cyan-600 text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Devix AI & NovoTech</h3>
                  <p className="text-gray-600 mb-4">Led front-end development for admin panels & e-commerce sites, implementing complex user interfaces and checkout flows.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Leadership</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">E-commerce</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Admin Panels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
            <p className="text-xl text-gray-600">Showcasing my best work and technical achievements</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20analytics%20dashboard%20interface%20with%20charts%2C%20graphs%2C%20and%20real-time%20data%20visualization%2C%20clean%20UI%20design%20with%20blue%20and%20purple%20color%20scheme%2C%20professional%20web%20application%20screenshot&width=400&height=300&seq=project-dashboard-001&orientation=landscape"
                  alt="AI Dashboard Project"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Dashboard (Vue 3 + Rails)</h3>
                <p className="text-gray-600 mb-4">Real-time analytics platform with WebSocket integration for live data updates and interactive visualizations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue 3</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Rails</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">WebSocket</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20product%20listings%2C%20shopping%20cart%2C%20and%20checkout%20flow%2C%20clean%20responsive%20design%20with%20green%20and%20blue%20accents%2C%20professional%20online%20store%20layout&width=400&height=300&seq=project-ecommerce-001&orientation=landscape"
                  alt="E-Commerce Store Project"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Commerce Store (React + Rails)</h3>
                <p className="text-gray-600 mb-4">Full-featured online store with cart system, dynamic product filters, and secure checkout flow.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Rails</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">E-commerce</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20marketing%20website%20with%20modern%20design%2C%20clean%20layout%2C%20responsive%20interface%2C%20corporate%20branding%20elements%2C%20business%20presentation%20style%20with%20purple%20and%20pink%20color%20accents%2C%20professional%20web%20development%20showcase&width=400&height=300&seq=project-marketing-002&orientation=landscape"
                  alt="Marketing Site Project"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Site (Figma to React)</h3>
                <p className="text-gray-600 mb-4">Pixel-perfect conversion with 95+ Lighthouse score, fully responsive design optimized for performance.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Figma</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">SEO</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20corporate%20business%20website%20with%20modern%20design%2C%20clean%20layout%2C%20company%20services%20showcase%2C%20professional%20photography%2C%20orange%20and%20red%20color%20scheme%2C%20business%20presentation%20style&width=400&height=300&seq=project-corporate-001&orientation=landscape"
                  alt="Corporate Business Website"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Business Website</h3>
                <p className="text-gray-600 mb-4">Professional corporate site with service showcases, team profiles, and client testimonials built with Bootstrap.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">HTML5</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Bootstrap</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Corporate</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20restaurant%20website%20design%20with%20elegant%20layout%2C%20food%20photography%2C%20menu%20showcase%2C%20online%20ordering%20system%2C%20teal%20and%20blue%20color%20scheme%2C%20hospitality%20business%20presentation&width=400&height=300&seq=project-restaurant-001&orientation=landscape"
                  alt="Restaurant Business Website"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Restaurant Business Website</h3>
                <p className="text-gray-600 mb-4">Elegant restaurant site with menu showcase, online reservations, and gallery built with Material-UI components.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Material-UI</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Restaurant</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20law%20firm%20website%20design%20with%20modern%20layout%2C%20attorney%20profiles%2C%20legal%20services%20showcase%2C%20professional%20photography%2C%20pink%20and%20purple%20color%20scheme%2C%20legal%20business%20presentation&width=400&height=300&seq=project-lawfirm-001&orientation=landscape"
                  alt="Law Firm Website"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Law Firm Website</h3>
                <p className="text-gray-600 mb-4">Professional legal services website with attorney profiles, case studies, and client portal integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Ruby</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Legal</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20healthcare%20medical%20website%20design%20with%20clean%20layout%2C%20doctor%20profiles%2C%20appointment%20booking%20system%2C%20medical%20services%20showcase%2C%20green%20and%20teal%20color%20scheme%2C%20healthcare%20business%20presentation&width=400&height=300&seq=project-healthcare-001&orientation=landscape"
                  alt="Healthcare Website"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Website</h3>
                <p className="text-gray-600 mb-4">Medical practice website with appointment booking, doctor profiles, and patient portal built with CSS3 and HTML5.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">HTML5</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">CSS3</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Healthcare</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20real%20estate%20website%20design%20with%20property%20listings%2C%20search%20filters%2C%20agent%20profiles%2C%20property%20gallery%2C%20yellow%20and%20orange%20color%20scheme%2C%20real%20estate%20business%20presentation&width=400&height=300&seq=project-realestate-001&orientation=landscape"
                  alt="Real Estate Website"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Estate Website</h3>
                <p className="text-gray-600 mb-4">Property listing platform with advanced search filters, agent profiles, and virtual tours integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Bootstrap</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Real Estate</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Qualifications</h2>
            <p className="text-xl text-gray-600">Academic foundation and professional certifications</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-graduation-cap-line text-emerald-600 text-3xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
                  <p className="text-lg text-emerald-600 font-medium mb-2">Federal Urdu University, Islamabad</p>
                  <p className="text-gray-600 mb-4">2020 - 2024</p>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive computer science education covering software engineering principles, data structures, algorithms,
                    web development, database systems, and modern programming languages. Specialized in front-end technologies
                    and user interface design during final year projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">Computer Science</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Software Engineering</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Web Development</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Database Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect!</h2>
            <p className="text-xl text-gray-600">Open for freelance projects, remote roles, and collaborations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-emerald-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hashimn901@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">0311-6662412</p>
                  <p className="text-gray-600">03258517252</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <i className="ri-github-line text-cyan-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">GitHub</h3>
                  <p className="text-gray-600">@hashimnoor</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-whatsapp-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">+92 311-6662412</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleEmailClick}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="ri-mail-line"></i>
                    Send Email
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="ri-whatsapp-line"></i>
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-emerald-900 to-teal-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Hashim Noor</h3>
          <p className="text-gray-300 mb-6">Front-End Developer | React.js & Vue.js Specialist</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              <i className="ri-linkedin-line text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              <i className="ri-github-line text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              <i className="ri-twitter-line text-2xl"></i>
            </a>
            <a href="mailto:hashimn901@gmail.com" className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              <i className="ri-mail-line text-2xl"></i>
            </a>
            <button onClick={handleWhatsAppClick} className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              <i className="ri-whatsapp-line text-2xl"></i>
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2024 Hashim Noor. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer group"
          title="Chat on WhatsApp"
        >
          <i className="ri-whatsapp-line text-2xl group-hover:scale-110 transition-transform duration-300"></i>
        </button>
      </div>
    </main>
  );
}
