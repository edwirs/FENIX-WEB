import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/Servicios/Header"
import ServicesList from "components/Servicios/ServicesList"
import Layout from "hocs/layouts/Layout"
import coding_img from 'assets/img/Servicios/traje.png'
import { useEffect } from "react"

const posts_software = [
  {
    title: 'Trajes para caballero',
    img: coding_img,
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Fabricación de trajes para caballero sobre medidas en diferentes modelos y estilos, siempre teniendo muy en cuenta el gusto y opinión del cliente.',
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
    title: 'Pantalones',
    href: '#',
    img: coding_img,
    category: { name: 'Video', href: '#' },
    description:
      'Creación de pantalones a la medida que satisfagan la necesidad del cliente, con la mas alta calidad y materiales de primera calidad, lo cual brinda una duración única.',
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
    title: 'Abrigos, Chaquetas y chaquetones',
    href: '#',
    img: coding_img,
    category: { name: 'Case Study', href: '#' },
    description:
      'Contar con un abrigo, una chaqueta o chaqueton elegante personalizado puede llegar a ser un distintivo único, por ello confecciones Randol´s te ofrece lo mejor de lo mejor.',
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
    title: 'Camisas',
    img: coding_img,
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Para tener una presentacion elegante casual, la casmia se convierte en una prenda indispensable, por ello, ofrecemos a nuestros clientes lo mejor en calidad y precio de camiseria.',
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
    title: 'Corbatas y corbatines',
    href: '#',
    img: coding_img,
    category: { name: 'Video', href: '#' },
    description:
      'Para tus presentaciones, eventos, reunones, empresas, diario y demas, una buena corbata o corbatin te hace distinguir de los demas, este accesorio es indispensable.',
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
    title: 'Marcornas',
    href: '#',
    img: coding_img,
    category: { name: 'Case Study', href: '#' },
    description:
      'Si quieres hacer parte del grupo mas selectivo en cuanto a moda y elegancia, lo mejor es pensar en un accesorio como las mancornas, el cual te dara ese ditintivo elegante que tanto estas buscando.',
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
              <ServicesList posts={posts_software} section_title={'Trajes a la medida'}/>
              <ServicesList posts={posts_design} section_title={'Accesorios Casuales'}/>
          </div>
              <Footer/>
      </Layout>
  )
}
export default Services