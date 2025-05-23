
import { Button } from '@/components/ui/button';

const Urgency = () => {
  return (
    <section className="py-12 sm:py-16 bg-servalta-dark text-white overflow-hidden">
      <div className="container-tight px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-servalta-red/20 text-servalta-red rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            ⏰ NO ESPERES MÁS
          </span>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Cada día sin Servalta POS es un día de <span className="text-servalta-red">oportunidades perdidas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-6 sm:my-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-lg sm:text-xl font-bold text-servalta-red mb-1 sm:mb-2">$42,000+</div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Pérdidas Mensuales</h3>
              <p className="text-gray-300 text-xs">
                Los errores manuales, la lentitud y la ineficiencia están costándote miles de pesos cada mes en ventas potenciales.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-lg sm:text-xl font-bold text-servalta-red mb-1 sm:mb-2">60%</div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Clientes Perdidos</h3>
              <p className="text-gray-300 text-xs">
                Los clientes impacientes que enfrentan esperas largas y errores en sus pedidos rara vez regresan y comparten su mala experiencia.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-lg sm:text-xl font-bold text-servalta-red mb-1 sm:mb-2">15+ hrs</div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Tiempo Desperdiciado</h3>
              <p className="text-gray-300 text-xs">
                Tu equipo pierde más de 15 horas semanales en procesos manuales que podrían automatizarse completamente.
              </p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Los restaurantes que implementan Servalta POS informan un <span className="font-bold text-white">aumento promedio del 28% en ventas</span> y una <span className="font-bold text-white">reducción del 45% en errores operativos</span> en los primeros 90 días.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm h-auto w-full sm:w-auto">
              Programa una Demostración Hoy
            </Button>
            <p className="text-xs mt-3 text-gray-400">
              Implementación en 48 horas | Sin contratos a largo plazo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
