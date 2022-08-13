import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  // mod estado componente renderiza utomatico
  const [value1, setValue1] = useState("");
  //nao renderiza automaticamente
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [value1]);
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
          onChange={(e) => setValue1(e.target.value)}
        />
        {console.log((e) => e.target)}
      </div>
    </div>
  );
};

export default UseRef;
