import Conectividad from 'assets/img/conectividad.png'
import Garantia from 'assets/img/garantia.png'
import Experiencia from 'assets/img/experiencia.png'
import fondo1 from 'assets/img/fondo_1.png';

const incentives = [
    {
      name: 'Conectividad OnLine',
      imageSrc: Conectividad,
      description: "Las sesiones de lectura del tarot marsella se realizan de forma 100% online. Conéctate desde cualquier lugar y recibe orientación personalizada en tiempo real.",
    },
    {
      name: 'Nuestra garantía',
      imageSrc: Garantia,
      description: "Cada lectura se realiza con total seriedad, respeto y compromiso. Se garantiza una experiencia personalizada, confidencial y enfocada en brindar claridad y bienestar.",
    },
    {
      name: 'Experiencia',
      imageSrc: Experiencia,
      description:
        "Cuento con más de 20 años de experiencia en la lectura del tarot y la baraja española. Mi trayectoria me permite ofrecer interpretaciones precisas, responsables y centradas en el bienestar de cada persona.",
    },
  ]
  
  export default function Incentivos() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Construimos apoyo para las personas donde pensamos en la atencion al cliente.
              </h2>
              <p className="mt-4 text-gray-500">
                La lectura de la baraja española o del tarot es una herramienta ancestral de guía y reflexión.
                A través de sus símbolos, ofrece claridad en momentos de incertidumbre y ayuda en la toma de decisiones.
                Esta práctica promueve el autoconocimiento y el equilibrio emocional.
                Al comprender mejor el presente, las personas pueden mejorar su calidad de vida y bienestar general.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    )
  }