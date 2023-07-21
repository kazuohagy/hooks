import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function () {};

const UseRef = (props) => {
  // mod estado componente renderiza utomatico
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  //nao renderiza automaticamente
  const count = useRef(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  console.log(inputRef1.current);

  const merge = function (s1, s2) {
    return [...s1].map(function(e, i) {
      return `${e}-`
    }).join("")
  };

  useEffect(() => {
    count.current = count.current + 1;
    inputRef2.current.focus();
  }, [value1]);
  useEffect(() => {
    count.current++;
    inputRef1.current.focus();
  }, [value2]);
  //roda logo antes do componente ser renderizado
  //   count.current = count.current + 1;
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio 1" />
      <div className="center">
        <div>
          <span className="text">Valor:</span>
          <span className="text">{value1}[</span>

          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          ref={inputRef1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio 2" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={inputRef2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
