import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url, method = 'get', body = null) => {
    const [state,setState] = useState({
        data:null,
        loading:true
    })
    useEffect(function(){fetch(url,{method})
        .then(resp => resp.json())
    .then(json => setState({
        data:json,
        loading:false
    }))},[url,method])
    return state
}