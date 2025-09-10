import copas from 'assets/img/carta_copas.jpg';

const stats = [
    { label: 'Fundado', value: '2002' },
    { label: 'Empleados', value: '1' },
    { label: 'Clientes Beta', value: '+500' },
    { label: 'Sedes', value: '1' },
  ]
  
  export default function Testimonios() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={copas}
                  alt=""
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  <div>
                    
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <p className="relative">
                        El tarot no predice el futuro, revela el camino que estás construyendo para tu bienestar.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">Alexandra Bello</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Con la misión de guiar y empoderar a las personas
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  El tarot es una herramienta ancestral que, a través de sus símbolos y arquetipos, 
                  permite descubrir caminos y posibilidades. Cada carta revela mensajes profundos que conectan 
                  con la intuición, brindando claridad y orientación en momentos de duda. Con una mirada respetuosa 
                  y consciente, buscamos que cada consulta sea un espacio de reflexión, crecimiento y equilibrio 
                  personal.
                </p>
                <p className="text-base leading-7">
                  Nuestra experiencia y compromiso nos han permitido acompañar a muchas personas en sus procesos 
                  de cambio y transformación. Creemos firmemente que el conocimiento es poder, y que cuando se 
                  combina con la intuición, puede iluminar el camino más adecuado para cada alma que busca respuestas.
                </p>
              </div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }