
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Diseñado específicamente para pizzerías mexicanas",
      servalta: true,
      others: false
    },
    {
      feature: "Menús digitales con códigos QR",
      servalta: true,
      others: true
    },
    {
      feature: "Gestión de ingredientes y variantes de pizzas",
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
    <section id="why-us" className="py-20 bg-servalta-gray">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            ¿Por qué elegir <span className="gradient-text">Servalta</span>?
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            No todos los sistemas POS son iguales. Descubre por qué las pizzerías mexicanas más exitosas confían en Servalta.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-zoom-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-3 text-center py-4 border-b">
            <div className="col-span-1">
              <span className="font-medium text-gray-600">Características</span>
            </div>
            <div className="col-span-1 border-x">
              <span className="font-bold text-servalta-red">Servalta POS</span>
            </div>
            <div className="col-span-1">
              <span className="font-medium text-gray-600">Otros sistemas</span>
            </div>
          </div>
          
          <div className="divide-y">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 py-4 text-center items-center">
                <div className="col-span-1 px-4 text-left">
                  <span className="text-sm md:text-base">{item.feature}</span>
                </div>
                <div className="col-span-1 border-x">
                  {item.servalta ? (
                    <Check className="mx-auto h-5 w-5 text-servalta-green" />
                  ) : (
                    <X className="mx-auto h-5 w-5 text-servalta-red" />
                  )}
                </div>
                <div className="col-span-1">
                  {item.others ? (
                    <Check className="mx-auto h-5 w-5 text-servalta-green" />
                  ) : (
                    <X className="mx-auto h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-servalta-gray/30 py-6 px-6 text-center">
            <p className="mb-4 font-medium">Servalta POS está diseñado específicamente para las necesidades de las pizzerías mexicanas</p>
            <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full">
              Obtén tu demostración exclusiva
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
