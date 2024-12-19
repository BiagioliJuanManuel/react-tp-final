import { useEffect, useState } from "react"

const useFetch = (url, getService) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetching = async ()=>{
        try{
            const response = await getService(url);
            setData(response);
            setLoading(false);
        }catch(err){
            console.log("Fetching error: " + err)
        }
    }

    useEffect(()=>{
        fetching();
    },[url, getService])

    return { data, loading }

}

export default useFetch;