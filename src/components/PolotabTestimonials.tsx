
import { Star, Quote } from 'lucide-react';

const PolotabTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Propietaria",
      restaurant: "La Cocina de María",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      content: "Servalta POS transformó completamente nuestro restaurante. En solo 3 meses aumentamos nuestras ventas un 35% y redujimos los errores de pedidos a casi cero. El equipo está más organizado y los clientes más satisfechos.",
      rating: 5,
      highlight: "35% más ventas"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "Chef Ejecutivo",
      restaurant: "Sabores Mexicanos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "La integración con la cocina es perfecta. Los pedidos llegan instantáneamente organizados por prioridad. Hemos reducido el tiempo de preparación un 40% y nuestro personal está mucho menos estresado.",
      rating: 5,
      highlight: "40% menos tiempo"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      position: "Gerente General",
      restaurant: "Tradición Gastronómica",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "El soporte técnico es excepcional. Tuvimos una duda durante el fin de semana y nos respondieron en menos de 10 minutos. La plataforma nunca falla y nuestros datos siempre están seguros.",
      rating: 5,
      highlight: "Soporte 24/7"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-700 font-semibold flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              Testimonios reales
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clientes satisfechos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Historias reales de restaurantes que han transformado su negocio con Servalta POS.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Quote */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-gray-100" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Highlight */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-blue-700 font-bold text-sm">{testimonial.highlight}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.restaurant}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="a" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23ffffff" fill-opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23a)"/%3E%3C/svg%3E')] opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Quieres ser el próximo caso de éxito?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a más de 10,000 restaurantes que ya están transformando su negocio con Servalta POS.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Empezar mi transformación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolotabTestimonials;
