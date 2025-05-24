
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Aumento promedio en ventas",
      description: "Los restaurantes ven resultados inmediatos",
      color: "from-servalta-red to-red-600"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Restaurantes confían en nosotros",
      description: "Desde pequeños locales hasta cadenas",
      color: "from-servalta-blue to-blue-600"
    },
    {
      icon: Clock,
      value: "48h",
      label: "Implementación completa",
      description: "De la instalación a estar operativo",
      color: "from-servalta-green to-green-600"
    },
    {
      icon: Award,
      value: "99.9%",
      label: "Tiempo de actividad garantizado",
      description: "Confiabilidad que puedes contar",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-servalta-dark via-gray-900 to-servalta-dark text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Números que hablan por sí solos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Miles de restaurantes ya están transformando su negocio con Servalta POS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`relative group animate-fade-in ${isVisible ? 'animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/10">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                {/* Value with counter animation */}
                <div className="relative">
                  <h3 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    {stat.label}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-300 mb-6 text-lg">
            ¿Listo para ser parte de estas estadísticas?
          </p>
          <button className="bg-servalta-red hover:bg-servalta-red/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Únete a los líderes del sector
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
