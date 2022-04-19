import React, { useState } from "react";
import axios from "axios";
import { api } from "../constants/apiUrl.js";
import { Link, useNavigate } from "react-router-dom";

const EnviarPaquete = () => {
  /* 
  {paquetes.map((paquete) => (
    <tr key={paquete.id}>
      <td>{paquete.id}</td>
      <td>{paquete.origen}</td>
      <td>{paquete.destino}</td>
      <td>{paquete.detalle}</td>
      <td>{paquete.created_at}</td>
    </tr> */
  const [id, setId] = useState(Date.now());
  const [id_cliente, setIdcliente] = useState(0);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [detalle, setDetalle] = useState("");
  const [precio, setPrecio] = useState(0);
  const [peso, setPeso] = useState(0);

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${api}/paquetes`, {
      id_cliente,
      origen,
      destino,
      detalle,
      precio,
      peso,
    });

    console.log(res.data.message);
    if (res.data.message === "Paquete Agregado.") {
      alert(res.data.message);

      navigate("/");
    } else {
      alert("Por favor llene correctamente los campos");
    }
  };
  return (
    <div>
      <h3>Crear un nuevo Paquete</h3>
      <div className="container">
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Origen</label>
            <input
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Destino</label>
            <input
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Detalle</label>
            <input
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="number"
              className="form-control"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Peso</label>
            <input
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              type="number"
              className="form-control"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">IdCliente</label>
            <input
              value={id_cliente}
              onChange={(e) => setIdcliente(e.target.value)}
              type="number"
              className="form-control"
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnviarPaquete;
