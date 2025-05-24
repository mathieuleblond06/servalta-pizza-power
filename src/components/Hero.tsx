
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-servalta-gray">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in tracking-tight">
              Revoluciona tu <span className="gradient-text">Restaurante</span> con Servalta POS
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              El sistema de punto de venta diseñado específicamente para restaurantes mexicanos. Optimiza tus operaciones, aumenta las ventas y mejora la experiencia del cliente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-servalta-red hover:bg-servalta-red/90 rounded-full px-8 py-6 w-full sm:w-auto">
                Demostración Gratuita
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 flex items-center gap-2 w-full sm:w-auto">
                <Play className="h-4 w-4" />
                Ver Video
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Diseñado por expertos gastronómicos <span className="text-servalta-red font-bold">|</span> Soporte local 24/7
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1562967914-608f82629710" 
                alt="Servalta POS para Restaurantes" 
                className="rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in-slow">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-servalta-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-servalta-red"></span>
                </span>
                <p className="text-sm font-medium">Procesamiento en tiempo real</p>
              </div>
            </div>
            <div className="absolute -z-10 bg-gradient-to-br from-servalta-red/20 to-servalta-blue/20 w-full h-full rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[50px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
