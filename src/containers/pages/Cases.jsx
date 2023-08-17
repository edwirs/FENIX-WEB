
import CaseList from "components/Cases/CaseList"
import Header from "components/Cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Cases(){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <CaseList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Cases