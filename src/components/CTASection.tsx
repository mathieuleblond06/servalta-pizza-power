
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="demo" className="py-20 bg-servalta-gray">
      <div className="container-tight">
        <div className="bg-servalta-dark rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
              <span className="inline-block px-4 py-1 bg-servalta-red/20 text-servalta-red rounded-full text-sm font-medium mb-6">
                OFERTA ESPECIAL
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                30 días de prueba <span className="text-servalta-red">sin compromisos</span>
              </h2>
              
              <p className="text-gray-300 mb-8 text-sm sm:text-base">
                Prueba Servalta POS sin riesgos. Implementación completa, capacitación para tu equipo y soporte premium por 30 días. Si no estás satisfecho, no pagas nada.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-servalta-red"></div>
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base">Implementación en 48 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-servalta-red"></div>
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base">Capacitación gratuita para tu equipo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-servalta-red"></div>
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base">Soporte técnico 24/7</span>
                </div>
              </div>
              
              <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full w-full md:w-auto">
                Programa tu demostración
              </Button>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-servalta-blue to-servalta-red opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <form className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-full max-w-md">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-servalta-dark">Solicita tu demo personalizada</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre de tu restaurante
                      </label>
                      <input
                        type="text"
                        id="business"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="Nombre de tu negocio"
                      />
                    </div>
                    
                    <Button className="bg-servalta-dark hover:bg-servalta-dark/90 w-full mt-4 rounded-lg">
                      Solicitar Demo Gratuita
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
