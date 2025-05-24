
import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-100 rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 animate-bounce"></div>
      </div>

      <div className="container-tight relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[90vh]">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-3 bg-white shadow-xl rounded-full px-6 py-3 mb-8 animate-fade-in border border-gray-100">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Sistema de punto de venta líder</span>
            </div>

            {/* Main title with typing animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in tracking-tight leading-tight">
              <span className="block text-gray-900">
                Impulsa tu
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                restaurante
              </span>
              <span className="block text-gray-900">
                al siguiente nivel
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Revoluciona tu negocio con el sistema POS más avanzado de México. 
              <span className="font-bold text-blue-600"> Aumenta tus ventas hasta un 40%</span> 
              y optimiza todas tus operaciones.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-col sm:flex-row items-start justify-center lg:justify-start gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Sin configuración compleja</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Soporte 24/7 en español</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Resultados inmediatos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto group">
                <span className="group-hover:scale-110 transition-transform duration-200">
                  Prueba gratuita 30 días
                </span>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 py-6 flex items-center gap-3 text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto border-2 border-gray-300">
                <Play className="h-6 w-6 fill-current animate-pulse" />
                Ver demostración
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p>Más de <span className="font-bold text-blue-600">2,500 restaurantes</span> confían en Servalta POS</p>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              {/* Main dashboard image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" 
                  alt="Servalta POS Dashboard" 
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/10"></div>
                
                {/* Floating notification cards */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">+28% Ventas</p>
                      <p className="text-xs text-gray-600">Este mes</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">En tiempo real</p>
                      <p className="text-xs text-gray-600">Sincronizado</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-red-500 text-white p-3 rounded-xl shadow-xl animate-pulse transform -translate-y-1/2">
                  <span className="text-xs font-bold">¡NUEVO!</span>
                </div>
              </div>

              {/* Secondary floating images */}
              <div className="absolute top-20 -left-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-48 h-32 bg-white rounded-2xl shadow-lg p-4 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">POS Móvil</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -right-16 hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-40 h-28 bg-white rounded-2xl shadow-lg p-3 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700">Menú QR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-transparent to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
