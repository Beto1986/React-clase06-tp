// Este TP está hecho para agrupar a todos los temas que venimos viendo hasta el momento.
// La idea es generar una factura, en donde el usuario cargue:
//    Sus datos personales
//    Las herramientas a comprar, junto con el precio y la cantidad.

// El sistema debe mostrar:
//    un listado con las herramientas agregadas al carrito.
//    Un total de la compra

import { useState, useEffect } from "react";
import "./App.css";

import { CargaDatos, Titulo } from "./components";
// import {v4 as uuidv4} from 'uuid';

function App() {
  // Estados:
  // const [herramienta, setHerramienta] = useState({
  //   // Agregar los campos necesarios
  //   herramienta: "",
  //   precio: "",
  //   cantidad: ""
  // });

  // const [carrito, setCarrito] = useState([]);
  // // Usar el useEffect para visualizar los cambios de estado

  // // Si consideras que debe haber mas estados agregalos aca abajo:
  // const [id,setId] = useState(0);

  return (
    <div className="App">
      <Titulo
        tipoFactura="'A'"
        nombreCliente="Alberto López"
        organizacion="Ferretería López"
      />
      <CargaDatos />
      {/* 
        Generá los isguientes componentes:
        // Estos componentes los llamé en el de "CargaDatos" directamente.
        <Listado /> ==> Acá podrás eliminar algún ítem si lo consideras necesario.
        <Total />   ==> Aca mostrarás el total. En caso de haber eliminado un ítem tendrás que re-hacer el cálculo
      
      */}
    </div>
  );
}

export default App;
