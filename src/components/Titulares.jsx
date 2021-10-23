import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares, quitarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {titulares.map((j) => (
        <article className="titular" key={j.id}>
          <div>
            <img
              src={`https://rkouye.opendatasoft.com/explore/dataset/top-scorers-can-2019/files/${j.playerphoto.id}/300`}
              alt={j.playerwebname}
            />

            <button onClick={() => quitarTitular(j)}>❌</button>
          </div>
          <p>{j.nombre}</p>
        </article>
      ))}
      <img
        src="https://img.freepik.com/vector-gratis/vector-campo-futbol-verde-o-campo-futbol-parrilla_1284-41290.jpg?size=626&ext=jpg"
        alt="cancha de futbol"
        className="img-cancha"
      />
    </div>
  </section>
);
const mapStateToProps = (state) => ({
  titulares: state.titulares,
});
const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
