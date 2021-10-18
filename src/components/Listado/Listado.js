// Desestructuro todos los valores que paso por prop del componente
const Listado = ({
  carrito,
  handleEliminar,
  clave,
  herramienta,
  precio,
  cantidad
}) => {
  let total = 0;

  return (
    <>
      {carrito &&
        carrito.map((c) => {
          // Voy totalizando segun el precio y cantidad de cada item.
          total = total + c.precio * c.cantidad;

          return (
            <>
              <p> Herramienta: {c[herramienta]}</p>
              <p> Precio: {c[precio]}</p>
              <p> Cantidad: {c[cantidad]}</p>
              <button onClick={() => handleEliminar(c[clave])}>X</button>
              <hr style={{ width: 400 }}></hr>
            </>
          );
        })}
      {/* Acá genero el total */}
      <p style={{ fontWeight: "bold" }}> Total: ${total} </p>
    </>
  );
};

export default Listado;
