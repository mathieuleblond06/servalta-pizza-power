
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "$999",
      description: "Ideal para restaurantes pequeños",
      features: [
        "1 terminal POS",
        "Dashboard básico",
        "Menú QR",
        "Gestión de órdenes",
        "Soporte por email",
        "Actualizaciones mensuales"
      ],
      cta: "Comenzar Gratis",
      popular: false
    },
    {
      name: "Premium",
      price: "$1,499",
      description: "La solución perfecta para la mayoría de restaurantes",
      features: [
        "3 terminales POS",
        "Dashboard avanzado",
        "Menú QR personalizable",
        "Módulo de cocina",
        "Gestión de inventario",
        "Fidelización de clientes",
        "Soporte 24/7",
        "Actualizaciones semanales"
      ],
      cta: "Comenzar 30 Días Gratis",
      popular: true
    },
    {
      name: "Empresarial",
      price: "$2,999",
      description: "Para cadenas y restaurantes de alto volumen",
      features: [
        "Terminales POS ilimitadas",
        "Análisis avanzado",
        "Personalización completa",
        "Integración con APIs externas",
        "Soporte prioritario 24/7",
        "Capacitación en sitio",
        "Actualizaciones prioritarias"
      ],
      cta: "Contactar Ventas",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Planes <span className="gradient-text">Flexibles</span> para tu Negocio
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Encuentra el plan perfecto para tu restaurante. Todos nuestros planes incluyen 30 días de prueba sin compromiso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-6 transition-all duration-300 animate-fade-in ${
                plan.popular ? 'bg-servalta-dark text-white shadow-xl border-2 border-servalta-red scale-105 z-10' : 'bg-white text-servalta-dark border border-gray-200 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-servalta-red text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-servalta-dark'}`}>{plan.name}</h3>
                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`ml-1 text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>MXN/mes</span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-servalta-red' : 'text-servalta-green'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full rounded-lg ${
                  plan.popular 
                    ? 'bg-servalta-red hover:bg-servalta-red/90' 
                    : 'bg-servalta-dark hover:bg-servalta-dark/90'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Todos los precios son mensuales. También disponible facturación anual con 20% de descuento.
            <br />Los precios no incluyen IVA. Consulta nuestros términos y condiciones para más detalles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
