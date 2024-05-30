const incentives = [
    {
      name: 'Envío gratis',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "En realidad, no es gratis, simplemente le ponemos precio a los productos. Alguien está pagando por ello y no somos nosotros.",
    },
    {
      name: 'Nuestra garantía',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "Prestamos garantía de por vida por nuestros materiales y csturas, casos ajenos a ello, no estaras solo, te brindaremos asesoria personailizada.",
    },
    {
      name: 'Cambios',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "Una vez la prenda sale de nuestras instalaciones no cuenta con cambios o devoluciones, pero si puedes cambiarlo con alguno de tus amigos.",
    },
  ]
  
  export default function Incentivos() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Construimos nuestro negocio sobre la base del servicio al cliente.
              </h2>
              <p className="mt-4 text-gray-500">
                En confecciones Randol´s creemos que basarnos en nuestros clientes siempre nos otorga la facilidad de poder ir un paso adelante,
                con el unico fin de constntemente estar innovando y mejorando para ellos. Tu negocio, tu dia a dia, tus eventos, tus uniformes pueden
                ser el mejor distintiv si cuentas con una prenda elegante diseada y confeccionada por confecciones Randol's.
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