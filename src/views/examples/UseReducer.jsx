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
function reducer(state) {

}

const UseReducer = (props) => {
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
