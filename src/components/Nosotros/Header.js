import Typewriter from 'typewriter-effect'
import whatsappLogo from 'assets/img/whatsapp.png';
import instagramLogo from 'assets/img/instagram.png';
import FacebookLogo from 'assets/img/facebook.jpeg';
import fondo1 from 'assets/img/fondo_1.png';
import {Link} from 'react-router-dom'

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
      { name: 'Contacto', href: '/contacto' },
  ],
  company: [
      { name: 'Casos', href: '/casos' },
      { name: 'Servicios', href: '/servicios' },
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Carreras', href: '/carreras' },
      { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
      {
        name: 'WhatsApp',
        href: 'https://wa.me/3002308365',
        icon: () => (
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            style={{ width: 65, height: 65, objectFit: 'contain' }}
          />
        ),
      },
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <img
            src={FacebookLogo}
            alt="Facebook"
            style={{ width: 65, height: 65, objectFit: 'contain' }}
          />
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <img
            src={instagramLogo}
            alt="Instagram"
            style={{ width: 60, height: 60, objectFit: 'contain' }}
          />
        ),
      },
    ],
}
function Header(){

    

    return(
        <main>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
            <div>
              <div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight pb-10">
                  Acerca de Nosotros
                </h1>
                <p className="mt-16 text-2xl max-w-3xl leading-8 text-black max-w-4xl">
                Fenix nació en el año 2002, gracias a la pasión y dedicación de su fundadora, Alexandra Bello, 
                quien ha recorrido un camino guiado por la sabiduría ancestral y la interpretación consciente 
                de las cartas. A lo largo de más de dos décadas, hemos logrado consolidarnos como un referente 
                en el ámbito de las consultas espirituales y de crecimiento personal, ofreciendo lecturas 
                personalizadas que buscan orientar, aclarar y acompañar a cada cliente en sus decisiones 
                y procesos de vida. Nuestra misión es mantener viva la esencia del tarot marsella, combinando tradición, 
                empatía y un enfoque centrado en el bienestar y la armonía interior.
                </p>
                <div className="mt-10 flex space-x-6">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-900 hover:text-gray-800">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 top-[50px] -z-10 bg-white overflow-hidden blur-md">
                          <img
                            src={fondo1}
                            className="w-auto h-[550px] object-contain object-top ml-auto"
                            alt="Decoración"
                          />
                        </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header