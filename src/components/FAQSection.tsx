
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar Servalta POS?",
      answer: "La implementación completa de Servalta POS toma solo 48 horas. Nuestro equipo se encarga de la configuración, carga de menú, personalización y capacitación para que puedas empezar a usarlo de inmediato."
    },
    {
      question: "¿Necesito hardware especial?",
      answer: "Servalta POS está diseñado para funcionar en dispositivos estándar como tabletas, computadoras y smartphones. Aunque ofrecemos hardware optimizado, puedes usar tu propio equipo para comenzar sin inversiones adicionales."
    },
    {
      question: "¿Puedo personalizar el sistema según mis necesidades?",
      answer: "¡Absolutamente! Servalta POS es altamente personalizable. Puedes configurar categorías de menú, adicionales, modificadores, permisos de usuario y más. Para personalizaciones más avanzadas, nuestro equipo de desarrollo puede crear características específicas para tu negocio."
    },
    {
      question: "¿Qué pasa si ya tengo otro sistema POS?",
      answer: "Facilitamos la migración desde otros sistemas POS. Nuestro equipo se encarga de transferir tus datos, incluyendo menú, clientes e inventario. Ofrecemos capacitación específica para usuarios que vienen de otros sistemas, facilitando la transición."
    },
    {
      question: "¿El sistema funciona sin internet?",
      answer: "Sí, Servalta POS incluye un modo fuera de línea que te permite seguir operando durante interrupciones de internet. El sistema sincronizará automáticamente los datos cuando se restablezca la conexión."
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer: "Ofrecemos soporte técnico local 24/7 en español. Puedes contactarnos por teléfono, chat o email. También proporcionamos capacitación continua, actualizaciones regulares y acceso a nuestra base de conocimiento."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-servalta-gray">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Todo lo que necesitas saber sobre Servalta POS antes de tomar tu decisión.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-gray-600 mb-2">¿No encuentras la respuesta que buscas?</p>
            <a href="#contact" className="text-servalta-red font-medium hover:underline">
              Contáctanos y te responderemos en menos de 2 horas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
