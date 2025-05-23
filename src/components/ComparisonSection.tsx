
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Diseñado específicamente para restaurantes mexicanos",
      servalta: true,
      others: false
    },
    {
      feature: "Menús digitales con códigos QR",
      servalta: true,
      others: true
    },
    {
      feature: "Gestión de ingredientes y variantes de platillos",
      servalta: true,
      others: false
    },
    {
      feature: "Integración con servicio a domicilio",
      servalta: true,
      others: true
    },
    {
      feature: "Programa de fidelización con recompensas",
      servalta: true,
      others: false
    },
    {
      feature: "Soporte técnico local 24/7",
      servalta: true,
      others: false
    },
    {
      feature: "Sin contratos a largo plazo",
      servalta: true,
      others: false
    },
    {
      feature: "Implementación en 48 horas",
      servalta: true,
      others: false
    }
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-servalta-gray overflow-hidden">
      <div className="container-tight px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title animate-fade-in text-xl sm:text-2xl md:text-3xl">
            ¿Por qué elegir <span className="gradient-text">Servalta</span>?
          </h2>
          <p className="section-subtitle animate-fade-in text-sm sm:text-base" style={{ animationDelay: '0.2s' }}>
            No todos los sistemas POS son iguales. Descubre por qué los restaurantes mexicanos más exitosos confían en Servalta.
          </p>
        </div>
        
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl overflow-hidden animate-zoom-in" style={{ animationDelay: '0.3s' }}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px]">
              <thead>
                <tr className="text-center border-b">
                  <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-600 w-1/2">
                    Características
                  </th>
                  <th className="py-3 px-2 sm:px-4 border-x text-center text-xs sm:text-sm font-bold text-servalta-red w-1/4">
                    Servalta POS
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-medium text-gray-600 w-1/4">
                    Otros sistemas
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                      {item.feature}
                    </td>
                    <td className="py-3 px-2 sm:px-4 border-x">
                      {item.servalta ? (
                        <Check className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-servalta-green" />
                      ) : (
                        <X className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-servalta-red" />
                      )}
                    </td>
                    <td className="py-3 px-2 sm:px-4">
                      {item.others ? (
                        <Check className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-servalta-green" />
                      ) : (
                        <X className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-servalta-gray/30 py-4 sm:py-6 px-4 sm:px-6 text-center">
            <p className="mb-3 sm:mb-4 font-medium text-xs sm:text-sm">Servalta POS está diseñado específicamente para las necesidades de los restaurantes mexicanos</p>
            <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full text-xs sm:text-sm py-2 h-auto w-full sm:w-auto">
              Obtén tu demostración exclusiva
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
