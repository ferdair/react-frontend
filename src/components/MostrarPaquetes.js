import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api } from "../constants/apiUrl.js";

const MostrarPaquetes = () => {
  console.log(api);

  const [paquetes, setPaquetes] = useState([]);
  const [filtro, setFiltro] = useState([]);
  useEffect(() => {
    getAllPaquetes();
  }, []);

  const getAllPaquetes = async () => {
    const response = await axios.get(`${api}/paquetes`);
    setPaquetes(response.data);
  };
  /* const paquetesByDetalle = () => {};
  const paquetesbyFecha = () => {};
 */
  const filtrarPaquetes = async (event) => {
    const response = await axios.get(`${api}/paquetes`);
    let res;
    if (Number(filtro) === 0) {
      res = response.data.filter((p) => p.detalle.includes(event.target.value));
    } else {
      res = response.data.filter((p) =>
        p.created_at.includes(event.target.value)
      );
    }

    setPaquetes(res);
  };
  return (
    <div>
      <div className="row">
        <form class="form-inline">
          <input
            type="text"
            class="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Busqueda"
            onChange={filtrarPaquetes}
          />
          <label for="exampleFormControlSelect1">Selecciona una opcion</label>

          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => setFiltro(e.target.value)}
            value={filtro}
          >
            <option>Por nombre</option>
            <option>Por fecha</option>
          </select>
        </form>
      </div>
      <div className="mt-sm">
        <table className="table table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>Id</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Nombre</th>
              <th>Fecha de Creación</th>
              <th>
                {" "}
                <Link
                  to="/create"
                  className="btn btn-success mt-2 mb-2 text-white"
                >
                  Crear Envío
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {paquetes.map((paquete) => (
              <tr key={paquete.id}>
                <td>{paquete.id}</td>
                <td>{paquete.origen}</td>
                <td>{paquete.destino}</td>
                <td>{paquete.detalle}</td>
                <td>{paquete.created_at.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MostrarPaquetes;
