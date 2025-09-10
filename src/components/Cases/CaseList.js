import CaseCard from "./CaseCard"
import Carousel from '@itseasy21/react-elastic-carousel';
import orientacion from 'assets/img/orientacion.png';
import claridad from 'assets/img/claridad.png';
import transformacion from 'assets/img/transformacion.png';

function CaseList(){

    const posts = [
        {
            id:'1234-qwer',
          title: 'Orientación en Relaciones Personales',
          href: '#',
          category: { name: 'Articulo', href: '#' },
          description:
            'He tenido el privilegio de ayudar a mis consultantes a comprender mejor sus relaciones, ya sea con su pareja, familia o amistades. Gracias a las cartas, hemos descubierto verdades ocultas y encontrado la manera de mejorar la comunicación y fortalecer los vínculos.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl: orientacion,
          readingTime: '6 min',
          author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
            id:'5678-asdf',
          title: 'Claridad en Momentos de Cambio',
          href: '#',
          category: { name: 'Noticia', href: '#' },
          description:
            'A lo largo de mi experiencia, he acompañado a muchas personas en decisiones importantes como mudanzas, cambios de carrera y nuevos comienzos. A través del tarot, he podido darles la claridad que necesitaban para actuar con seguridad y tomar el camino más favorable.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:claridad,
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
            id:'4321-zxcv',
          title: 'Transformación y Bienestar Personal',
          href: '#',
          category: { name: 'Mejora', href: '#' },
          description:
            'Uno de mis mayores logros es ver cómo, después de una lectura, las personas se sienten más tranquilas y motivadas para transformar su vida. He guiado a muchos consultantes en la superación de bloqueos y en la búsqueda de equilibrio, logrando mejoras reales en su bienestar diario.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl: transformacion,
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ]

    const  breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1280, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
    ]

    return(
        <div className="relative  px-4 pt-16 pb-20 sm:px-6 lg:px-8  lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-full">
          
            <Carousel
                itemsToScroll={3}
                itemsToShow={3}
                breakPoints={breakPoints}
                pagination={false}
                itemPadding={[0, 48]}
            >
          
                {posts.map((posts, index)=> 
                    <CaseCard index={index} posts={posts}/>
                )}
            </Carousel>
        </div>
      </div>
    )
}
export default CaseList