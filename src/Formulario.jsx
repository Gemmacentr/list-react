import { useState } from "react";
function Formulario({ crearItem }) {
  let [textoInput, setTextoInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        crearItem({
          id: Math.random() * 200,
          nombre: textoInput,
          seleccionado: false,
        });
        setTextoInput("");
      }}
    >
      <input
        type="text"
        value={textoInput}
        onChange={(e) => {
          setTextoInput(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
}
export default Formulario;
