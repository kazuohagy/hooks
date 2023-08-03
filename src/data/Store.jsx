import React from 'react'

const initialSate = {
    number:1234, 
    text: 'Context API + HOOKS MARIO'
}
export const AppContext = React.createContext(initialSate)
const Store =  props => {
    const [state, setState] = React.useState(initialSate)
    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
    }
    return(
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
            }}>
            {props.children}
        </AppContext.Provider>
    )
    }

export default Store;