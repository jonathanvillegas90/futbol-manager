import React from "react";
import { Provider } from "react-redux";
import Jugadores from "./components/Jugadores.jsx";
import store from "./store";
import Equiposeleccionado from "./components/Equiposeleccionado.jsx";
import "./styles/styles.scss";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Ed manager</h1>
      <Jugadores />
      <Equiposeleccionado />
    </main>
  </Provider>
);

export default App;
