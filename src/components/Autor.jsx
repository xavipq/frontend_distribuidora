
const Autor = ({nombre, correo}) => {
  return (
    <>
      <h4>Nombre: <strong>{nombre}</strong></h4>
      <h4>Correo: {correo}</h4>
    </>
  );
}

export default Autor;