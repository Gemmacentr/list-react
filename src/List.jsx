import Item from "./Item";
import Formulario from "./Formulario";
import { useState } from "react";
function Lista() {
  const [nombre, setNombre] = useState([]);
  function crearItem(objectoItem) {
    setNombre([...nombre, objectoItem]);
  }
  function editarItem(id) {
    setNombre(
      nombre.map((obj) => {
        if (obj.id == id) {
          obj.seleccionado = !obj.seleccionado;
        }
        return obj;
      }),
    );
  }
  function deleteItem(id) {
    setNombre(nombre.filter((obj) => obj.id != id));
  }
  return (
    <>
      <Formulario crearItem={crearItem} />
      <ul>
        {nombre.length === 0 ? (
          <li>No hay persona</li>
        ) : (
          nombre.map(({ id, nombre, seleccionado }) => (
            <Item
              nombre={nombre}
              seleccionado={seleccionado}
              key={id}
              id={id}
              editarItem={editarItem}
              deleteItem={deleteItem}
            ></Item>
          ))
        )}
      </ul>
    </>
  );
}
export default Lista;
