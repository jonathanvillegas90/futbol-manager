import { createStore } from "redux";
import jugadores from "../src/top-scorers-can-2019@rkouye.json";

const initialState = {
  jugadores,
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
