import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState,useCallback } from 'react'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span>{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    
                </div>
            </div>
        </div>
    )
}

export default UseCallback
