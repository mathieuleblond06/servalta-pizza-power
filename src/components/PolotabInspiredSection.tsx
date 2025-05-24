
import { useState, useEffect } from 'react';
import { ChefHat, Smartphone, Clock, TrendingUp, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PolotabInspiredSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: ChefHat,
      title: "Gestión de Cocina Inteligente",
      description: "Optimiza tu cocina con flujos de trabajo automatizados",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600",
      stats: "45% más eficiente"
    },
    {
      icon: Smartphone,
      title: "Aplicación Móvil Completa",
      description: "Controla tu restaurante desde cualquier lugar",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      stats: "24/7 disponible"
    },
    {
      icon: TrendingUp,
      title: "Analytics Avanzados",
      description: "Toma decisiones basadas en datos en tiempo real",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      stats: "+40% ventas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container-tight relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Star className="h-4 w-4" />
            <span className="font-semibold">Tecnología de vanguardia</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in">
            <span className="text-gray-900">Todo lo que necesitas</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              en una sola plataforma
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Desde el punto de venta hasta la gestión completa del restaurante, 
            Servalta POS integra todas las herramientas que necesitas para triunfar.
          </p>
        </div>

        {/* Interactive features showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeFeature === index
                    ? 'bg-white shadow-2xl border-2 border-blue-200'
                    : 'bg-white/50 hover:bg-white/80 shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {feature.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeFeature === index
                          ? 'bg-green-100 text-green-800 animate-pulse'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {feature.stats}
                      </span>
                    </div>
                    <p className={`transition-colors duration-300 ${
                      activeFeature === index ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Feature image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-96 object-cover transition-all duration-700 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating stats */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">2,500+</p>
                    <p className="text-xs text-gray-600">Restaurantes</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">48h</p>
                    <p className="text-xs text-gray-600">Setup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 animate-pulse"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"2\"/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para revolucionar tu restaurante?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Únete a miles de restaurantes que ya están aumentando sus ventas y optimizando sus operaciones
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                Comenzar prueba gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolotabInspiredSection;
