import Clients from "components/Nosotros/Clients"
import Header from "components/Nosotros/Header"
import Images from "components/Nosotros/Images"
import Team from "components/Nosotros/Team"
import Testimonios from "components/Nosotros/Testimonios"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Nosotros(){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Testimonios/>
                <Images/>
                <Clients/>
                <Team/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Nosotros