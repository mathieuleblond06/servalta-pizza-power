
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ModuleShowcase = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const modules = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      subtitle: 'Tu centro de comando diario',
      description: 'Nuestro dashboard te mantiene al tanto con métricas clave como reservaciones, productos más vendidos y tendencias de clientes. Toma decisiones basadas en datos, optimiza operaciones e impresiona a cada cliente desde un centro de control.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      highlights: [
        'Métricas en tiempo real',
        'Vista de tendencias y análisis',
        'Reportes personalizables',
        'Acceso desde cualquier dispositivo'
      ]
    },
    {
      id: 'pos',
      title: 'POS',
      subtitle: 'Control total sobre tus órdenes',
      description: 'Toma el control de tu proceso de pedidos con nuestra intuitiva pantalla POS. Gestiona borradores, guarda elementos, busca y filtra rápidamente, personaliza pedidos con variantes y notas, y maneja opciones flexibles de pago.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      highlights: [
        'Gestión de órdenes sin esfuerzo',
        'Personalización mejorada de pedidos',
        'Opciones flexibles de pago',
        'Búsqueda y filtros intuitivos'
      ]
    },
    {
      id: 'kitchen',
      title: 'Cocina',
      subtitle: 'Eficiencia para tu equipo',
      description: '¡Desata la eficiencia en la cocina! Nuestra pantalla de cocina mantiene a tu equipo sincronizado con actualizaciones de pedidos en vivo, anuncios de nuevos pedidos y seguimiento de estado en tiempo real. Marca elementos como "Preparando" o "Completo" con un toque para una comunicación fluida.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      highlights: [
        'Actualizaciones de pedidos en vivo',
        'Anuncios de nuevas órdenes',
        'Seguimiento de estado en tiempo real',
        'Comunicación fluida entre equipos'
      ]
    },
    {
      id: 'orders',
      title: 'Órdenes',
      subtitle: 'Visibilidad completa',
      description: 'Nunca pierdas de vista un pedido. Nuestra página de órdenes actuales proporciona una vista en tiempo real de todos los pedidos activos, permitiéndote rastrear el progreso, actualizar estados y reimprimir recibos según sea necesario. Este centro garantiza una comunicación clara y un cumplimiento fluido.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      highlights: [
        'Vista en tiempo real de pedidos activos',
        'Actualización de estados en todas las pantallas',
        'Reimpresión de recibos a demanda',
        'Comunicación clara entre equipos'
      ]
    }
  ];

  const currentModule = modules.find(m => m.id === activeTab) || modules[0];

  return (
    <section id="modules" className="py-20 bg-servalta-gray overflow-hidden">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Una Suite <span className="gradient-text">Completa</span> para tu Pizzería
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Servalta POS integra todos los aspectos de la operación de tu pizzería en una sola plataforma potente y fácil de usar.
          </p>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
              {modules.map(module => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id}
                  className="data-[state=active]:bg-servalta-dark data-[state=active]:text-white rounded-lg py-3"
                >
                  {module.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="mt-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 animate-slide-right">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentModule.title}</h3>
                  <p className="text-servalta-red font-medium mb-4">{currentModule.subtitle}</p>
                  <p className="text-gray-600 mb-6">{currentModule.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {currentModule.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-servalta-red/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-servalta-red"></div>
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full">
                    Ver Demostración
                  </Button>
                </div>
                
                <div className="w-full lg:w-1/2 animate-slide-left">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={currentModule.image} 
                      alt={currentModule.title}
                      className="w-full h-auto rounded-2xl transition-transform duration-500 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-servalta-dark/30 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 bg-servalta-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      Módulo {currentModule.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ModuleShowcase;
