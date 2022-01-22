import { useEffect, useState } from "react";
const useRecuperation = (url) => {
    const [data, setData] = useState(null)
    const [isloading, setIsloading] = useState(true)
    const [error, setError] = useState(null)
    useEffect( () =>{
        const abotCont  = new AbortController()
        fetch(url, {signal: abotCont.signal})
            .then((response) => {
                if(!response.ok)
                {
                    throw Error('Sorry!!! une erreur est survenu..')
                }
                return response.json()
            })
            .then( (data) =>{
                setData(data)
                setIsloading(false)
                setError(null)
            
            })
            .catch(err =>{
                if(err.name === 'AbortErro')
                {
                    console.log("fetch stoppé");
                }
                else
                {
                    setError(err.message)
                    setIsloading(false)
                }
               
            })
        return () => abotCont.abort()
    },[url])
    return {data, isloading,error}
}
 
export default useRecuperation;