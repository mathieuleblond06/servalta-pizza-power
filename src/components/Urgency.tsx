
import { Button } from '@/components/ui/button';

const Urgency = () => {
  return (
    <section className="py-20 bg-servalta-dark text-white">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-servalta-red/20 text-servalta-red rounded-full text-sm font-medium mb-6 animate-fade-in">
            ⏰ NO ESPERES MÁS
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Cada día sin Servalta POS es un día de <span className="text-servalta-red">oportunidades perdidas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-8 md:my-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-xl md:text-2xl font-bold text-servalta-red mb-2">$42,000+</div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Pérdidas Mensuales</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Los errores manuales, la lentitud y la ineficiencia están costándote miles de pesos cada mes en ventas potenciales.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-xl md:text-2xl font-bold text-servalta-red mb-2">60%</div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Clientes Perdidos</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Los clientes impacientes que enfrentan esperas largas y errores en sus pedidos rara vez regresan y comparten su mala experiencia.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-xl md:text-2xl font-bold text-servalta-red mb-2">15+ hrs</div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Tiempo Desperdiciado</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Tu equipo pierde más de 15 horas semanales en procesos manuales que podrían automatizarse completamente.
              </p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Los restaurantes que implementan Servalta POS informan un <span className="font-bold text-white">aumento promedio del 28% en ventas</span> y una <span className="font-bold text-white">reducción del 45% en errores operativos</span> en los primeros 90 días.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto">
              Programa una Demostración Hoy
            </Button>
            <p className="text-xs md:text-sm text-gray-400 mt-4">
              Implementación en 48 horas | Sin contratos a largo plazo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
