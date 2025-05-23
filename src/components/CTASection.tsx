
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTASection = () => {
  return (
    <section id="demo" className="py-12 sm:py-16 bg-servalta-gray overflow-hidden">
      <div className="container-tight px-4 sm:px-6">
        <div className="bg-servalta-dark rounded-xl sm:rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-servalta-red/20 text-servalta-red rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                OFERTA ESPECIAL
              </span>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                30 días de prueba <span className="text-servalta-red">sin compromisos</span>
              </h2>
              
              <p className="text-gray-300 mb-6 text-xs sm:text-sm">
                Prueba Servalta POS sin riesgos. Implementación completa, capacitación para tu equipo y soporte premium por 30 días. Si no estás satisfecho, no pagas nada.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-servalta-red"></div>
                  </div>
                  <span className="text-gray-200 text-xs sm:text-sm">Implementación en 48 horas</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-servalta-red"></div>
                  </div>
                  <span className="text-gray-200 text-xs sm:text-sm">Capacitación gratuita para tu equipo</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-servalta-red"></div>
                  </div>
                  <span className="text-gray-200 text-xs sm:text-sm">Soporte técnico 24/7</span>
                </div>
              </div>
              
              <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full text-xs sm:text-sm py-2 h-auto w-full md:w-auto">
                Programa tu demostración
              </Button>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-servalta-blue to-servalta-red opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <form className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 w-full max-w-sm sm:max-w-md">
                  <h3 className="text-base sm:text-lg font-bold mb-3 text-servalta-dark">Solicita tu demo personalizada</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <Input
                        type="text"
                        id="name"
                        className="w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        className="w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        className="w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Nombre de tu restaurante
                      </label>
                      <Input
                        type="text"
                        id="business"
                        className="w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-servalta-red focus:border-servalta-red"
                        placeholder="Nombre de tu negocio"
                      />
                    </div>
                    
                    <Button className="bg-servalta-dark hover:bg-servalta-dark/90 w-full mt-3 rounded-lg text-xs sm:text-sm py-1.5 sm:py-2 h-auto">
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
