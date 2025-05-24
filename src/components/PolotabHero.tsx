
import { Button } from '@/components/ui/button';
import { Play, Star, ArrowRight } from 'lucide-react';

const PolotabHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">Calificado #1 por restaurantes</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                El sistema POS que
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  revoluciona
                </span>
                tu restaurante
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Aumenta tus ventas hasta un 40%, reduce errores operativos y mejora la experiencia del cliente con nuestra plataforma todo-en-uno.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Comenzar prueba gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Ver demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Restaurantes confían</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Tiempo de actividad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Soporte técnico</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-left">
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Principal</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-700">$24,847</div>
                      <div className="text-sm text-green-600">Ventas hoy</div>
                      <div className="text-xs text-green-500">+23% vs ayer</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-700">342</div>
                      <div className="text-sm text-blue-600">Órdenes</div>
                      <div className="text-xs text-blue-500">+15% vs ayer</div>
                    </div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                    <div className="flex items-end justify-between h-24">
                      <div className="w-4 bg-blue-400 rounded-t-sm h-12"></div>
                      <div className="w-4 bg-purple-400 rounded-t-sm h-16"></div>
                      <div className="w-4 bg-pink-400 rounded-t-sm h-20"></div>
                      <div className="w-4 bg-blue-400 rounded-t-sm h-14"></div>
                      <div className="w-4 bg-purple-400 rounded-t-sm h-24"></div>
                      <div className="w-4 bg-pink-400 rounded-t-sm h-18"></div>
                      <div className="w-4 bg-blue-400 rounded-t-sm h-22"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 w-48 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Orden #1247</div>
                    <div className="text-sm text-gray-600">Completada</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 w-48 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Tiempo promedio</div>
                    <div className="text-sm text-gray-600">12 min (-30%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default PolotabHero;
