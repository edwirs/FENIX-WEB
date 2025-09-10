import lectura from 'assets/img/lectura.jpeg';
import calidad_vida from 'assets/img/calidad_vida.jpg';

const posts = [
    {
      title: 'Lectura del tarot',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Me hicieron una lectura de tarot y quedé sorprendida. Todo coincidió con lo que estaba viviendo y recibí consejos que me ayudaron muchísimo. ¡Fue una experiencia increíble y muy acertada!',
      date: 'Mar 16, 2010',
      datetime: '2010-03-16',
      imageUrl: lectura,
      readingTime: '',
      author: {
        name: 'Edwin Barragan',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Prediccion laboral',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Recibí una lectura de tarot enfocada en mi trabajo y fue muy precisa. La predicción se cumplió y me dio la confianza para tomar decisiones importantes. ¡Recomiendo la experiencia al 100%!',
      date: 'Sep 22, 2016',
      datetime: '2016-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Mejora de calidad de vida',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'La lectura de tarot me dio claridad sobre cambios que debía hacer y eso transformó mi día a día. Hoy me siento más tranquila, enfocada y con una mejor calidad de vida. ¡Fue una guía invaluable!',
      date: 'Feb 12, 2025',
      datetime: '2025-02-12',
      imageUrl:calidad_vida,
      readingTime: '',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function CasosUsados() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto lg:mx-12 max-w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Algunos de nuestros Clientes</h2>
            
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full blur-sm" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }