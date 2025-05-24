
import { Shield, Zap, TrendingUp, Users, Clock, Award } from 'lucide-react';

const PolotabFeatures = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Aumenta Ventas",
      description: "Incrementa tus ingresos hasta un 40% con análisis inteligentes y recomendaciones automáticas.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Operaciones Rápidas",
      description: "Reduce tiempos de espera y errores con nuestro sistema optimizado para restaurantes.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Gestión de Personal",
      description: "Controla horarios, permisos y productividad de tu equipo desde una sola plataforma.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Protección de datos bancaria con encriptación de nivel militar y respaldos automáticos.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      description: "Monitorea tu negocio desde cualquier lugar con actualizaciones instantáneas.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Award,
      title: "Soporte Premium",
      description: "Asistencia 24/7 con técnicos especializados en la industria restaurantera.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-700 font-semibold">¿Por qué elegir Servalta?</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Características que
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transforman negocios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre por qué más de 10,000 restaurantes confían en nuestra plataforma para impulsar su crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {feature.description}
              </p>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu restaurante?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a miles de restaurantes que ya están aumentando sus ventas con Servalta POS.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Comenzar prueba gratuita de 30 días
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolotabFeatures;
