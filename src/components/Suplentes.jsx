import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarSuplente }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="cancha">
      {suplentes.map((j) => (
        <article className="suplentes" key={j.id}>
          <div>
            <img
              src={`https://rkouye.opendatasoft.com/explore/dataset/top-scorers-can-2019/files/${j.playerphoto.id}/300`}
              alt={j.playerwebname}
            />
            <h3>{j.playerwebname}</h3>
            <button onClick={() => quitarSuplente(j)}>❌</button>
          </div>
          <p>{j.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);
const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});
const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(jugador) {
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
