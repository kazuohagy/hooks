import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState,useCallback } from 'react'
import UseCallbackButtons from './UseCallbackButton'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)
    function inc(delta){
        setCount(count + delta)
    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span>{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
