import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState,reducer} from '../../store'
import {numberAdd2, login} from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuario</span>
                }
                <span className="text">{state.number}</span>
                <div className="">
                    <button className="btn" onClick={()=>login(dispatch, 'Luigi')}>login</button>
                    <button className="btn" onClick={()=>dispatch({type: 'mario', number: 10})}>mario</button>
                    <button className="btn" onClick={()=>numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={()=>dispatch({type: 'x7'})}>x7</button>
                    <button className="btn" onClick={()=>dispatch({type: 'dividi25'})}>/25</button>
                    <button className="btn" onClick={()=>dispatch({type: 'parseInt'})}>transforma inteiro</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
