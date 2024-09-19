import { useEffect,useState } from "react";

function useCurrencyInfo (currency){
    const [data, setData] = useState({});


    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        //Convert the response into json file
        .then((res) => res.json())
        //change the value of data with response currency 
        .then((res)=>setData(res[currency]))
        console.log(data);

    },[currency])
    console.log(data);
    return data
    
}

export default useCurrencyInfo;
