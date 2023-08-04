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
        </div>
    )
}

export default UseReducer
