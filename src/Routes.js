import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Servicios from "containers/pages/Servicios";
import Nosotros from "containers/pages/Nosotros";
import Contacto from "containers/pages/Contacto";
import Login from "containers/pages/Login/Login";

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />

            {/* Home Display */}
            <Route path="/" element={<Home />} />
            <Route path="/casos" element={<Cases />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes