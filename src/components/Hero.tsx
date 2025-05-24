
import { Button } from '@/components/ui/button';
import { Play, Star, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 pb-12 overflow-hidden bg-gradient-to-br from-white via-servalta-gray to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-servalta-red/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-servalta-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-servalta-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-tight relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[90vh]">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            {/* Badge with animation */}
            <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Usado por +2,500 restaurantes</span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-servalta-red rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-servalta-blue rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-servalta-green rounded-full border-2 border-white"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 animate-fade-in tracking-tight leading-tight">
              El POS que
              <span className="block">
                <span className="gradient-text animate-pulse">revoluciona</span>
              </span>
              <span className="block">tu restaurante</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Aumenta tus ventas un <span className="font-bold text-servalta-red">40%</span>, optimiza operaciones y 
              ofrece experiencias únicas a tus clientes con el sistema POS más avanzado de México.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-servalta-red hover:bg-servalta-red/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Prueba Gratis 30 Días
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 flex items-center gap-3 text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Play className="h-5 w-5 fill-current" />
                Ver Demo en Vivo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>2,500+ restaurantes</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>40% más ventas promedio</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>4.9/5 satisfacción</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              {/* Main product image */}
              <div className="relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" 
                  alt="Servalta POS Dashboard" 
                  className="rounded-3xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-servalta-green rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">+28% Ventas</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-servalta-blue rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Tiempo real</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-servalta-red text-white p-3 rounded-xl shadow-xl animate-pulse">
                  <span className="text-xs font-bold">¡NUEVO!</span>
                </div>
              </div>

              {/* Secondary images */}
              <div className="absolute top-20 -left-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300" 
                  alt="Tablet POS" 
                  className="w-48 rounded-2xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-10 -right-16 hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300" 
                  alt="QR Menu" 
                  className="w-40 rounded-2xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-servalta-red/20 via-transparent to-servalta-blue/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
