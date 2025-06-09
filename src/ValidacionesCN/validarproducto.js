// ValidarProducto.js
  function validarProducto(producto) {
  const { nombre_producto, id_categoria, precio_unitario, stock } = producto;

  if (!nombre_producto || !id_categoria || precio_unitario === '' || stock === '') {
    return { valido: false, mensaje: "Completa todos los campos requeridos." };
  }

  if (isNaN(precio_unitario) || Number(precio_unitario) < 0) {
    return { valido: false, mensaje: "El precio debe ser un número positivo." };
  }

  if (isNaN(stock) || Number(stock) < 0) {
    return { valido: false, mensaje: "El stock debe ser un número positivo." };
  }
  return { valido: true };
  
}

module.exports = validarProducto;
