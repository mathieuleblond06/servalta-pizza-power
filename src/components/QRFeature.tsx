
import { Button } from '@/components/ui/button';

const QRFeature = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 animate-slide-right">
            <span className="inline-block px-4 py-1 bg-servalta-gray text-servalta-dark rounded-full text-sm font-medium mb-6">
              TECNOLOGÍA INNOVADORA
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Olvídate de los menús en papel con nuestro <span className="gradient-text">Sistema QR</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              ¡Deja atrás los menús de papel! Nuestro sistema se integra perfectamente con códigos QR o menús digitales. Los clientes simplemente escanean el código o acceden al menú en línea para una experiencia sin contacto e interactiva.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-servalta-green/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-servalta-green"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Experiencia sin contacto</span>
                  <p className="text-gray-600 text-sm">Mejora la higiene y moderniza la experiencia del cliente.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-servalta-red/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-servalta-red"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Actualización instantánea</span>
                  <p className="text-gray-600 text-sm">Cambia precios, añade especiales o elimina elementos agotados al instante.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-servalta-blue/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-servalta-blue"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Comparte o imprime</span>
                  <p className="text-gray-600 text-sm">Comparte el enlace o descarga e imprime códigos QR para tu local.</p>
                </div>
              </li>
            </ul>
            
            <Button className="bg-servalta-red hover:bg-servalta-red/90 rounded-full w-full sm:w-auto">
              Explora los Menús Digitales
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-left mt-8 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -z-10 bg-gradient-to-br from-servalta-blue/20 to-servalta-red/20 w-full h-full rounded-full blur-3xl"></div>
              <div className="relative border-8 border-white shadow-2xl rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Menú digital Servalta"
                  className="w-full h-auto"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-servalta-dark to-transparent p-4 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9H21M9 21V9M7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">Escanea para ver el menú</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">Actualización automática con tus últimas ofertas</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg rotate-12 animate-float hidden sm:block">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="8" fill="white"/>
                  <path d="M10 10H14V14H10V10ZM16 10H20V14H16V10ZM22 10H26V14H22V10ZM28 10H32V14H28V10ZM34 10H38V14H34V10ZM46 10H50V14H46V10ZM52 10H56V14H52V10ZM64 10H70V14H64V10ZM10 16H14V20H10V16ZM22 16H26V20H22V16ZM34 16H38V20H34V16ZM40 16H44V20H40V16ZM46 16H50V20H46V16ZM58 16H62V20H58V16ZM64 16H68V20H64V16ZM10 22H14V26H10V22ZM16 22H20V26H16V22ZM22 22H26V26H22V22ZM28 22H32V26H28V22ZM40 22H44V26H40V22ZM46 22H50V26H46V22ZM52 22H56V26H52V22ZM58 22H62V26H58V22ZM64 22H68V26H64V22ZM10 28H14V32H10V28ZM16 28H20V32H16V28ZM22 28H26V32H22V28ZM34 28H38V32H34V28ZM46 28H50V32H46V28ZM58 28H62V32H58V28ZM16 34H20V38H16V34ZM22 34H26V38H22V34ZM28 34H32V38H28V34ZM34 34H38V38H34V34ZM40 34H44V38H40V34ZM52 34H56V38H52V34ZM64 34H68V38H64V34ZM70 34H74V38H70V34ZM10 40H14V44H10V40ZM22 40H26V44H22V40ZM34 40H38V44H34V40ZM40 40H44V44H40V40ZM46 40H50V44H46V40ZM58 40H62V44H58V40ZM64 40H68V44H64V40ZM10 46H14V50H10V46ZM16 46H20V50H16V46ZM28 46H32V50H28V46ZM40 46H44V50H40V46ZM52 46H56V50H52V46ZM58 46H62V50H58V46ZM70 46H74V50H70V46ZM10 52H14V56H10V52ZM22 52H26V56H22V52ZM28 52H32V56H28V52ZM34 52H38V56H34V52ZM52 52H56V56H52V52ZM64 52H68V56H64V52ZM70 52H74V56H70V52ZM28 58H32V62H28V58ZM40 58H44V62H40V58ZM46 58H50V62H46V58ZM58 58H62V62H58V58ZM64 58H68V62H64V58ZM70 58H74V62H70V58ZM10 64H14V68H10V64ZM16 64H20V68H16V64ZM22 64H26V68H22V64ZM28 64H32V68H28V64ZM34 64H38V68H34V64ZM40 64H44V68H40V64ZM52 64H56V68H52V64ZM58 64H62V68H58V64ZM10 70H14V74H10V70ZM34 70H38V74H34V70ZM46 70H50V74H46V70ZM52 70H56V74H52V70ZM58 70H62V74H58V70ZM64 70H68V74H64V70Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRFeature;
