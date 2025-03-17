const Titulo = ({ texto, tecnologia }) => {
  return(
    <>
      <h2 
        className="colortitulo"
      >
        {texto} {tecnologia}
      </h2>
    </>
  );
}

export default Titulo; 