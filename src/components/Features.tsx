
import { ArrowDown } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Incrementa tus Ventas",
      description: "Aumenta el ticket promedio con recomendaciones inteligentes y promociones personalizadas.",
      stat: "+30%",
      color: "from-servalta-red/20 to-servalta-red/5"
    },
    {
      id: 2,
      title: "Optimiza Operaciones",
      description: "Reduce errores y tiempos de espera con procesos simplificados y automatizados.",
      stat: "-45%",
      color: "from-servalta-blue/20 to-servalta-blue/5"
    },
    {
      id: 3,
      title: "Fideliza Clientes",
      description: "Conoce mejor a tus clientes y crea programas de lealtad efectivos.",
      stat: "+80%",
      color: "from-servalta-green/20 to-servalta-green/5"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Transformación Digital <span className="gradient-text">Inmediata</span>
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tu restaurante necesita más que un simple sistema de cobro. Servalta POS es una plataforma completa de gestión que revoluciona cada aspecto de tu negocio.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="w-full md:w-1/3 feature-card animate-slide-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color}`}>
                <span className="text-2xl font-bold">{feature.stat}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#modules" className="flex flex-col items-center text-gray-500 hover:text-servalta-red transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="mb-2">Descubre más</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
