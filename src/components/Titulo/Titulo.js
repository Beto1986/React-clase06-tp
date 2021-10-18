// Agregar los props necesarios, junto con las proptypes
// para agendar el nombre del cliente, el tipo de factura y la organización

import propTypes from "prop-types";

const Titulo = ({ tipoFactura, nombreCliente, organizacion }) => {
  // Declaro las proptypes de las props del componente titulo
  Titulo.propTypes = {
    tipoFactura: propTypes.string,
    nombreCliente: propTypes.string,
    organizacion: propTypes.string
  };

  return (
    <>
      <h1>La ferreteria del tío Tito</h1>
      <h3>Tipo de Factura: {tipoFactura} </h3>
      <h3>Nombre: {nombreCliente}</h3>
      <h4>Organización: {organizacion}</h4>
    </>
  );
};

export default Titulo;
