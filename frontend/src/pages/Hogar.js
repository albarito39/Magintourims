import React from "react";
import Home from "../components/hogar.jsx"
import Header from "../components/cabezera.jsx";
import Navbar from "../components/buscador.jsx";

function Hogar() {
    return (
        <div classname="home">
            <Navbar/>
            <Home />
            <Header/>
        </div>
    );
}
export default Hogar