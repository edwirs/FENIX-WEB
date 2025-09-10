import whatsappLogo from 'assets/img/whatsapp.png';
import instagramLogo from 'assets/img/instagram.png';
import FacebookLogo from 'assets/img/facebook.jpeg';
import fondo1 from 'assets/img/fondo_1.png';

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
                  Servicios Ofrecidos por Nosotros
                </h1>
                <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                Nos encanta cambiar los patrones de pensamiento establecidos y crear lo que nunca antes se había intentado. tomamos semillas y cultivamos selvas.
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