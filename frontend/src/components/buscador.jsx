import React, { useState } from 'react';
import Hogar from './hogar2';


const Navbar = () => {
  const [search, setSearch] = useState()
  const [sitio, setSitio] = useState([])

  const sitios = [
    {
    pais: "Colombia",
    precio: "200.000",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/82/colombia.jpg?w=1400&h=500&s=1",
    fecha: "30 de noviembre",
    descripcion: "Detrás de Cien años de soledad, se encuentra un país real que cuenta la belleza detrás de tradiciones, culturas y narrativas que vale la pena conocer."
  }, {
    pais: "Venezuela",
    precio: "330.000",
    image: "https://www.letenkyzababku.sk/wp-content/uploads/2017/04/venezuela.jpg",
    fecha: "18 de noviembre",
    descripcion: "Detrás de Cien años de soledad, se encuentra un país real que cuenta la belleza detrás de tradiciones, culturas y narrativas que vale la pena conocer."
  }, {
    pais: "Perú",
    precio: "400.000",
    image: "https://www.google.com/imgres?q=colombia&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F1a%2F5f%2Fdd%2Fde%2Fcaption.jpg%3Fw%3D800%26h%3D800%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.co%2FTourism-g294073-Colombia-Vacations.html&docid=FNQDu6DDBtOwfM&tbnid=BF2jR7StZh50qM&vet=12ahUKEwiZuq_E9aKJAxUnRzABHZsJAeYQM3oECHcQAA..i&w=720&h=480&hcb=2&ved=2ahUKEwiZuq_E9aKJAxUnRzABHZsJAeYQM3oECHcQAA",
    fecha: "20 de noviembre",
    descripcion: "Detrás de Cien años de soledad, se encuentra un país real que cuenta la belleza detrás de tradiciones, culturas y narrativas que vale la pena conocer."
  }, {
    pais: "Argentina",
    precio: "210.000",
    image: "https://www.google.com/imgres?q=colombia&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F1a%2F5f%2Fdd%2Fde%2Fcaption.jpg%3Fw%3D800%26h%3D800%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.co%2FTourism-g294073-Colombia-Vacations.html&docid=FNQDu6DDBtOwfM&tbnid=BF2jR7StZh50qM&vet=12ahUKEwiZuq_E9aKJAxUnRzABHZsJAeYQM3oECHcQAA..i&w=720&h=480&hcb=2&ved=2ahUKEwiZuq_E9aKJAxUnRzABHZsJAeYQM3oECHcQAA",
    fecha: "26 de noviembre",
    descripcion: "Detrás de Cien años de soledad, se encuentra un país real que cuenta la belleza detrás de tradiciones, culturas y narrativas que vale la pena conocer."
  }]

  const searcher = (e) => {
    setSearch(e.target.value)

  }
  return (
    <div className="container">
      <div class="input-group rounded">
        <input type="search" onChange={searcher} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
        {sitios.map((sitio) =>
            <>
              <Hogar sitio={sitio}/>
            </>
          )}

      </div>
    </div>

  );
};

export default Navbar;
