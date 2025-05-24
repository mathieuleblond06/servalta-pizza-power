
const PolotabStats = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Restaurantes activos",
      description: "Confían en nuestra plataforma",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "40%",
      label: "Aumento en ventas",
      description: "Promedio en el primer año",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "99.9%",
      label: "Tiempo de actividad",
      description: "Garantizado 24/7",
      color: "from-purple-500 to-violet-500"
    },
    {
      number: "2 min",
      label: "Tiempo de configuración",
      description: "Listo para usar al instante",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Números que hablan por
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              sí solos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Resultados reales de restaurantes que han transformado su operación con Servalta POS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number */}
              <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              
              {/* Label */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.description}
              </p>
              
              {/* Decorative Line */}
              <div className={`w-20 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-6 rounded-full group-hover:w-32 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Únete a la revolución digital gastronómica
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Miles de restaurantes ya están utilizando Servalta POS para optimizar sus operaciones y aumentar sus ganancias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Solicitar demo personalizada
              </button>
              <button className="border-2 border-white/20 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300">
                Ver casos de éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolotabStats;
