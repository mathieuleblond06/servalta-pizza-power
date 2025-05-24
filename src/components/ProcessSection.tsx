
import { ArrowRight, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consulta gratuita",
      description: "Analizamos las necesidades específicas de tu restaurante",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
    },
    {
      number: "02", 
      title: "Configuración personalizada",
      description: "Adaptamos el sistema a tu menú, procesos y estilo",
      duration: "2-4 horas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
    },
    {
      number: "03",
      title: "Capacitación del equipo", 
      description: "Entrenamos a tu personal para usar el sistema eficientemente",
      duration: "1-2 horas",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
    },
    {
      number: "04",
      title: "¡Listo para vender!",
      description: "Tu restaurante opera con la tecnología más avanzada",
      duration: "Inmediato",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-servalta-blue/10 text-servalta-blue rounded-full text-sm font-semibold mb-6 animate-fade-in">
            PROCESO SIMPLE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-servalta-dark">
            De la decisión a la operación en
            <span className="block gradient-text">menos de 48 horas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Nuestro proceso probado garantiza una implementación sin problemas y resultados inmediatos
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-servalta-red via-servalta-blue to-servalta-green transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
                  {/* Step number */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-servalta-red to-servalta-blue rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Image */}
                  <div className="mb-6 mt-4 overflow-hidden rounded-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-servalta-dark group-hover:text-servalta-red transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-servalta-gray rounded-full text-sm font-medium text-servalta-dark">
                        <CheckCircle className="h-4 w-4 text-servalta-green" />
                        {step.duration}
                      </span>
                      {index < steps.length - 1 && (
                        <ArrowRight className="h-5 w-5 text-gray-400 hidden lg:block animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-servalta-red/5 to-servalta-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-servalta-red to-servalta-blue rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para comenzar tu transformación digital?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Únete a los miles de restaurantes que ya están aumentando sus ventas con Servalta POS
            </p>
            <button className="bg-white text-servalta-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Comenzar ahora - Es gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
