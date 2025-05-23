
const testimonials = [
  {
    id: 1,
    quote: "Desde que implementamos Servalta POS, nuestro tiempo de preparación se redujo un 35% y nuestras ventas aumentaron un 28%. La capacidad de gestionar fácilmente variantes de platillos y personalizar pedidos ha transformado nuestro negocio.",
    author: "Miguel Rodríguez",
    position: "Propietario, Restaurante La Costera",
    location: "Ciudad de México"
  },
  {
    id: 2,
    quote: "El sistema QR ha sido un éxito rotundo entre nuestros clientes jóvenes. Ya no gastamos en imprimir menús y podemos cambiar nuestras ofertas diarias en segundos. El soporte local 24/7 ha sido invaluable.",
    author: "Ana González",
    position: "Gerente, La Cantina Mexicana",
    location: "Guadalajara"
  },
  {
    id: 3,
    quote: "La facilidad de uso es impresionante. Capacitar al personal nuevo solía tomar días, ahora toma horas. El dashboard nos da información valiosa sobre tendencias de clientes que nos ayuda a planificar mejor nuestras promociones.",
    author: "Carlos Vega",
    position: "Dueño, Sabores del Mar",
    location: "Monterrey"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-servalta-dark text-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="section-title text-white animate-fade-in">
            Voces de <span className="text-servalta-red">Éxito</span>
          </h2>
          <p className="section-subtitle text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Escucha lo que dicen los propietarios de restaurantes que ya están utilizando Servalta POS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <svg className="w-12 h-12 text-servalta-red/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
                <p className="text-servalta-red text-xs mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
