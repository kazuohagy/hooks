import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart:[{}],
    number:0,
    products: [{},{}],
    user: null,
    // foco E VAI TOMA NO...
    number: 0
}
function reducer(state, action) {
    switch(action.type){
        case 'add2':
            return {...state, number: state.number + 2 }
        case 'numberadd':
            return {...state, user: {name:'leonardo'} }
        default:
            return state
    }
}

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
                    <button className="btn" onClick={()=>dispatch({type: 'numberadd'})}>login</button>
                    <button className="btn" onClick={()=>dispatch({type: 'add2'})}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
