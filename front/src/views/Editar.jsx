import { useParams } from "react-router-dom";

function Editar() {
  const { id } = useParams();
  return (
    <div>
      <h1>Editando película con ID {id}</h1>
    </div>
  );
}

export default Editar;






