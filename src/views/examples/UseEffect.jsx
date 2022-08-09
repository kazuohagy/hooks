import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

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

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  useEffect(
    function () {
      setFatorial(calcFatorial(number));
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
    </div>
  );
};

export default UseEffect;
