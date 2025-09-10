import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/Servicios/Header"
import ServicesList from "components/Servicios/ServicesList"
import Layout from "hocs/layouts/Layout"
import coding_img from 'assets/img/Servicios/traje.png'
import { useEffect } from "react"

import lectura_general from 'assets/img/lectura_general.png';
import predicciones from 'assets/img/predicciones.png';
import pasado from 'assets/img/pasado.png';
import vela1 from 'assets/img/vela1.png';
import vela2 from 'assets/img/vela2.png';
import vela3 from 'assets/img/vela3.png';

const posts_software = [
  {
    title: 'Lectura general, del amor y relaciones',
    img: lectura_general,
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Mis lecturas te ofrecen claridad sobre tu situación actual y los caminos que tienes por delante en el amor. Ya sea una visión general o enfocada sobre quien te conviene o no, recibirás orientación para tomar decisiones seguras, fortalecer vínculos y avanzar con armonía.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl: lectura_general,
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Predicciones laborales, financieras y de salud',
    href: '#',
    img: predicciones,
    category: { name: 'Video', href: '#' },
    description:
      'Te brindo precisión para tomar decisiones en trabajo, negocios o inversiones. Si buscas equilibrio interior, la lectura de salud energética identifica bloqueos y te orienta hacia una armonización espiritual que impulse tu bienestar.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Lectura de desiciones importantes, pasado, presente y futuro',
    href: '#',
    img: pasado,
    category: { name: 'Case Study', href: '#' },
    description:
      'Doy información para una toma de decisiones importantes analizando las opciones y sus posibles consecuencias. Con la lectura de pasado, presente y futuro, comprenderás la evolución de tu situación y obtendrás una visión más clara para actuar con confianza.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const posts_design = [
  {
    title: 'Limpieza, endulzamientos y armonización',
    img: vela1,
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Realizo rituales con velas para limpiar energías negativas y atraer endulzamiento a tu vida, favoreciendo la armonía en tus relaciones y tu entorno.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Apertura de caminos y protección',
    href: '#',
    img: vela2,
    category: { name: 'Video', href: '#' },
    description:
      'Utilizo velas para abrir caminos y atraer nuevas oportunidades, al mismo tiempo que realizo rituales de protección energética para resguardar tu vida y la de tu familia de influencias negativas.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Prosperidad, petición y manifestación',
    href: '#',
    img: vela3,
    category: { name: 'Case Study', href: '#' },
    description:
      'Enciendo velas en rituales diseñados para atraer prosperidad y estabilidad financiera, potenciando también tus peticiones y manifestaciones, logrando que tus metas y deseos sean realizados.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

function Services(){
useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return(
      <Layout>
        
          <Navbar/>
          <div className="pt-28">
              <Header/>
              <div className="py-12 bg-gray-50">

              </div>
              <ServicesList posts={posts_software} section_title={'Lecturas'}/>
              <ServicesList posts={posts_design} section_title={'Unjición y Arreglos de velas o velones'}/>
          </div>
              <Footer/>
      </Layout>
  )
}
export default Services