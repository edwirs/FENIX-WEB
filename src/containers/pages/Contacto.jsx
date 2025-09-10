import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { ChatBubbleLeftRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import whatsappLogo from "assets/img/whatsapp.png";
import gmailLogo from "assets/img/gmail.png";
import instagramLogo from 'assets/img/instagram.png';
import FacebookLogo from 'assets/img/facebook.jpeg';

function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactos = [
    {
      icon: <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8" />,
      title: "Dirígete a nuestro WhatsApp",
      description: "Comunicación directa, simple y rápida.",
      link: "https://wa.me/3002308365",
    },
    {
      icon: <img src={gmailLogo} alt="Gmail" className="w-8 h-8" />,
      title: "Envíame un correo electrónico",
      description: "Escríbenos y te responderemos pronto.",
      link: "mailto:tu_correo@ejemplo.com?subject=Consulta%acerca%20del%20tarot",
    },
    {
      icon: <img src={FacebookLogo} alt="Gmail" className="w-8 h-8" />,
      title: "Revisa un minuto nuestro Facebook",
      description: "Encontraras mas información sobre nosotros.",
      link: "#",
    },
    {
      icon: <img src={instagramLogo} alt="Gmail" className="w-8 h-8" />,
      title: "Visita nuestro Instagram",
      description: "Po ahí también nos podemos comunicar.",
      link: "#",
    },
  ];

  return (
    <Layout>
      <Navbar />
      <div className="pt-24 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight pb-10">Contáctanos</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Para cualquier duda o inquietud, siempre estaremos disponibles las 24 horas del día para ti.
          </p>
        </div>

        {/* Grid responsive */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {contactos.map((item, index) => (
            <div
                key={index}
                className="group flex flex-col sm:flex-row sm:items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
                >
                {/* Icono y texto */}
                <div className="flex items-center sm:items-center space-x-4 mb-4 sm:mb-0 flex-1">
                    <div className="bg-white border border-orange-200 p-4 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                </div>

                {/* Botón */}
                <a
                    href={item.link}
                    className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-transform duration-300 hover:scale-110 text-sm sm:text-base mx-auto sm:mx-0"
                    >
                    ¡Haz clic aquí!
                </a>
                </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Contacto;