function Item({ id, nombre, seleccionado, editarItem, deleteItem }) {
  return (
    <>
      <li>
        <span className={seleccionado ? "seleccionado" : ""}>{nombre}</span>
        <button onClick={() => editarItem(id)}>seleccionar</button>
        <button onClick={() => deleteItem(id)}>borrar</button>
      </li>
    </>
  );
}
export default Item;
