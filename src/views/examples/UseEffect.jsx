import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const number = parseInt(num);
  if (number < 0) {
    return -1;
  }
  if (number === 0) {
    return 1;
  }
  return calcFatorial(number - 1) * number;
}
function calcParImpar(parImpar) {
  const parImpar = parse(parImpar);

  return parImpar % 2 === 0;
}
const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [parImpar, setParImpar] = useState(0);
  const [fatorial, setFatorial] = useState(1);
  useEffect(
    function () {
      setFatorial(calcFatorial(number));
      setParImpar(calcParImpar(parImpar));
    },
    [number]
  );
  useEffect(
    function () {
      if (fatorial > 100000) {
        document.title = "o loko bixo";
      }
    },
    [fatorial]
  );
  //   setFatorial(calcFatorial(number));
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercise 1" />
      <div className="center">
        <span className="text">Fatorial: </span>
        <span className="text red">
          {fatorial === -1 ? "Nao existe" : fatorial}
        </span>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercise 2" />
      <div className="center">
        <span className="text">Par ou impar?:</span>
        <input type="number" className="input" onChange />
      </div>
    </div>
  );
};

export default UseEffect;
