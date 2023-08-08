export function numberAdd2(dispatch) {
    fetch('url')
        .then(res => res.json())
        .then(json => dispatch({type: 'userListReady', payload: json}))
    dispatch({ type: 'add2' })
}