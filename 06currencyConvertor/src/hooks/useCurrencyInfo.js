import {useState, useEffect} from 'react'

function useCurrencyInfo (currency){
    const [data, setData] = useState({})
    useEffect(async () => {
        const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    //     .then((res) => res.json())
    //     .then((res) => setData(res[currency]))
    const temp = await res.json();
    setData(temp[currency])

    }, [currency])
    return data;
}

export default useCurrencyInfo;