// Agregar los props necesarios, junto con las proptypes
//

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Esto se hace así para agrupar todos los componentes desde el index.js y luego aquí en una linea los importo a todos. Entonces aquí agrego el componente "Listado"
import { Listado } from "../../components";

const CargaDatos = (props) => {
  // En caso que el usuario presione el botón "Agregar al carrito"
  // Valida lo siguiente:
  //    La Herramienta no puede ser vacía
  //    El precio unitario no puede:
  //        Ni estar vacío
  //        Ni ser cero
  //    La cantidad no puede:
  //        Ni estar vacía
  //        Ni estar en cero
  // Si ocurre alguna de éstas, mostrá el error SOLO en la ubicación pertinente.
  // Si había un error pero se solucionó entonces no debe quedar ninguna advertencia

  const [herramienta, setHerramienta] = useState({
    // Agregar los campos necesarios
    id: "",
    // id: uuidv4(),
    herramienta: "",
    precio: "",
    cantidad: ""
  });

  const [carrito, setCarrito] = useState([]);
  // Usar el useEffect para visualizar los cambios de estado

  // Acá voy guardando cada modificación que se va realizando en cada input.
  useEffect(() => {
    console.log(herramienta);
  }, [herramienta]);

  useEffect(() => {
    console.log(carrito);
  }, [carrito]);

  // Si consideras que debe haber mas estados agregalos aca abajo:
  // const [id,setId] = useState(0);

  // Declaro estados para las validaciones de los inputs
  const [errorHerramienta, setErrorHerramienta] = useState(false);
  const [errorPrecio, setErrorPrecio] = useState(false);
  const [errorCantidad, setErrorCantidad] = useState(false);

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const handleChange = (e) => {
    //  console.log(e.target.value);
    setHerramienta({ ...herramienta, [e.target.name]: e.target.value });
  };

  const handleAgregarAlCarrito = () => {
    // Valido la herramienta
    if (herramienta.herramienta === "") {
      setErrorHerramienta(true);
      return;
    } else {
      setErrorHerramienta(false);
    }

    // Valido el precio
    if (herramienta.precio === "" || herramienta.precio === "0") {
      setErrorPrecio(true);
      return;
    } else {
      setErrorPrecio(false);
    }

    // Valido la cantidad
    if (herramienta.cantidad === "" || herramienta.cantidad === "0") {
      setErrorCantidad(true);
      return;
    } else {
      setErrorCantidad(false);
    }

    // Acá genero un ID automático
    herramienta.id = uuidv4();
    // console.log(herramienta.id);

    // Acá agrego los registros del carrito + el registro actual
    setCarrito([...carrito, herramienta]);
    limpiarCampos(); // Vaciar campos al agregar un item
  };

  const limpiarCampos = () => {
    setHerramienta({
      herramienta: "",
      precio: "",
      cantidad: ""
    });
  };

  const handleEliminar = (id) => {
    // Acá me quedo con los id que son distintos al id del item seleccionado.
    const arrayFiltrado = carrito.filter((c) => c.id !== id);
    // console.log(arrayFiltrado);
    setCarrito([...arrayFiltrado]);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Herramienta: </p>
        <input
          placeholder="Llave de tubo"
          // defaultValue= {herramienta.herramienta}
          value={herramienta && herramienta.herramienta} // Es util para que pueda limpiar los campos
          name="herramienta"
          type="text"
          onChange={(e) => handleChange(e)}
        />
        {errorHerramienta && (
          <p style={{ color: "red" }}>Ingresa una herramienta</p>
        )}
        <p>Precio Unitario: </p>
        <input
          placeholder="2500"
          // defaultValue= {herramienta.precio}
          value={herramienta && herramienta.precio}
          name="precio"
          type="text"
          onChange={(e) => handleChange(e)}
        />
        {errorPrecio && (
          <p style={{ color: "red" }}>Ingresa el precio de la herramienta</p>
        )}
        <p>Cantidad: </p>
        <input
          placeholder="1"
          // defaultValue= {herramienta.cantidad}
          value={herramienta && herramienta.cantidad}
          name="cantidad"
          type="text"
          onChange={(e) => handleChange(e)}
        />
        {errorCantidad && (
          <p style={{ color: "red" }}>Ingresa cuantas herramientas deseas</p>
        )}
      </form>
      <br />
      <button onClick={() => handleAgregarAlCarrito()}>
        Agregar al carrito
      </button>
      <br />

      {/* A partir de acá muestro el listado de items al carrito generando un nuevo componente "Listado" */}
      <Listado
        carrito={carrito}
        handleEliminar={handleEliminar}
        clave={"id"}
        herramienta={"herramienta"}
        precio={"precio"}
        cantidad={"cantidad"}
      />

      <br />
      {/* {
          carrito && carrito.map( (c) => {
            return (
                    <>
                    <hr style={{width:400}}></hr>
                    <p> Herramienta: {c.herramienta}</p>
                    <p> Precio: {c.precio}</p> 
                    <p> Cantidad: {c.cantidad}</p>
                    <button onClick={() => handleEliminar(c.id)} >X</button>
                    </>
                   )
              })
        } */}
    </>
  );
};

export default CargaDatos;
