import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState,useCallback } from 'react'
import UseCallbackButtons from './UseCallbackButton'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)
    const inc = useCallback(function(delta){
        setCount(cu => cu + delta)
    },[setCount])

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
