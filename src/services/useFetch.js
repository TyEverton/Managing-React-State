import {useState, useEffect} from "react"

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
    try{
      const response = await fetch(baseUrl + url)
      if(response.ok) {
        const json = await response.json()
        setData(json)
      } else {
        throw response
      }
    } catch(e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }
  init()
}, [url])  //this is the dependency array. this calls the getProducts function from productService, displays them and filters them based on the users selection. 
  //response is the users selection, while the end [] -->(known as the dependency array, saying to run this effect only once after the first render)<-- tells the function when it should be starting and stopping 

  return {data, error, loading}
}

