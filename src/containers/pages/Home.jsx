import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Incentivos from "components/home/Icentivos"
import CasosUsados from "components/home/CasosUsados"
import { useEffect } from "react"
import Header from "components/home/Header"


function Home(){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
                <Header/>
                <Incentivos/>
                <CasosUsados/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home