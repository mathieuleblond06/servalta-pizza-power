
import { useState } from 'react';
import { Monitor, Tablet, Smartphone, Wifi, Zap, Shield } from 'lucide-react';

const ProductShowcase = () => {
  const [activeDevice, setActiveDevice] = useState('tablet');

  const devices = [
    {
      id: 'tablet',
      name: 'Tablet POS',
      icon: Tablet,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      description: 'Perfecto para meseros y toma de órdenes móvil',
      features: ['Pantalla táctil', 'Batería 12h', 'Resistente']
    },
    {
      id: 'desktop',
      name: 'Desktop POS',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      description: 'Estación principal para caja y administración',
      features: ['Alto rendimiento', 'Múltiples periféricos', 'Gestión completa']
    },
    {
      id: 'mobile',
      name: 'App Móvil',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
      description: 'Control total desde tu smartphone',
      features: ['iOS & Android', 'Notificaciones', 'Gestión remota']
    }
  ];

  const activeDeviceData = devices.find(d => d.id === activeDevice) || devices[0];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-servalta-gray overflow-hidden">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-servalta-red/10 text-servalta-red rounded-full text-sm font-semibold mb-6 animate-fade-in">
            HARDWARE INTELIGENTE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-servalta-dark">
            Tecnología que se adapta a 
            <span className="block gradient-text">tu forma de trabajar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Desde tablets ligeras hasta estaciones completas, tenemos el hardware perfecto para cada necesidad
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Device selector */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="space-y-4">
              {devices.map((device, index) => (
                <div
                  key={device.id}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-500 animate-fade-in ${
                    activeDevice === device.id
                      ? 'bg-servalta-red text-white shadow-2xl scale-105'
                      : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveDevice(device.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeDevice === device.id ? 'bg-white/20' : 'bg-servalta-red/10'
                    }`}>
                      <device.icon className={`h-6 w-6 ${
                        activeDevice === device.id ? 'text-white' : 'text-servalta-red'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold">{device.name}</h3>
                  </div>
                  <p className={`mb-4 ${
                    activeDevice === device.id ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {device.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {device.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          activeDevice === device.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device showcase */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            <div className="relative">
              {/* Main device image */}
              <div className="relative z-10 animate-scale-in">
                <img
                  src={activeDeviceData.image}
                  alt={activeDeviceData.name}
                  className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating features */}
                <div className="absolute top-6 left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5 text-servalta-green" />
                    <span className="text-sm font-semibold">Conectividad 24/7</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-semibold">Ultra rápido</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-servalta-blue" />
                    <span className="text-sm font-semibold">Seguridad total</span>
                  </div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="w-full h-full bg-gradient-to-br from-servalta-red/10 via-transparent to-servalta-blue/10 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-servalta-red/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-servalta-blue/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom features grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Configuración en minutos',
              description: 'Setup automático sin complicaciones técnicas',
              icon: '⚡'
            },
            {
              title: 'Soporte incluido',
              description: 'Asistencia técnica 24/7 en español',
              icon: '🛟'
            },
            {
              title: 'Actualizaciones automáticas',
              description: 'Siempre tendrás la última versión',
              icon: '🔄'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-servalta-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
