import React from "react";
import TelaPadrao from "./src/componentes/TelaPadrao";
import Rotas from "./src/Rotas"
//Importação da biblioteca do JavaScript onde é possível adicionar o símbolo da moeda utilizada sem precisar colocar manualmente.
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return <TelaPadrao>
    <Rotas/>
  </TelaPadrao>
}