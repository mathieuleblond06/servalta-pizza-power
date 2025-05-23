
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`py-4 px-6 transition-all duration-300 w-full z-50 ${isScrolled ? 'sticky-nav' : ''}`}>
      <div className="container-tight flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-servalta-dark">
            Servalta<span className="text-servalta-red">POS</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-servalta-red transition-colors">
            Características
          </a>
          <a href="#modules" className="text-sm font-medium hover:text-servalta-red transition-colors">
            Módulos
          </a>
          <a href="#why-us" className="text-sm font-medium hover:text-servalta-red transition-colors">
            ¿Por qué nosotros?
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-servalta-red transition-colors">
            Testimonios
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-servalta-red transition-colors">
            Planes
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-servalta-red transition-colors">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="#contact" className="hidden md:inline-block">
            <Button variant="outline" className="rounded-full">Contacto</Button>
          </a>
          <a href="#demo">
            <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full">
              Demo Gratis
            </Button>
          </a>
          <button 
            className="md:hidden text-servalta-dark focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#modules" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Módulos
            </a>
            <a 
              href="#why-us" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ¿Por qué nosotros?
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planes
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-servalta-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
