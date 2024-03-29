import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/userCounter' // Corrigido o caminho para useCounter
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)
    function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span> {/* Exibe o valor do contador */}
                <div className="button-container"> {/* Adiciona classes para o div dos botões */}
                    <button className="btn" onClick={() => inc()}>+</button>
                    <button className="btn" onClick={() => dec()}>-</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <ul>
                {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
