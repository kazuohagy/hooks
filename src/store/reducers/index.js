export  function reducer(state, action) {
    switch(action.type){
        case 'add2':
            return {...state, number: state.number + 2 }
        case 'numberadd':
            return {...state, user: {name:action.name} }
        case 'x7':
            return {...state, number: state.number * 7 }
        case 'dividi25':
            return { ...state, number: state.number / 25}
        case 'parseInt':
            return {...state, number: parseInt(state.number)}
        case 'mario':
            return {...state, number: state.number + action.number}
        default:
            return state
    }
}