import { useState,useEffect } from "react";

const useHttp = (requestData,applyData)=>{

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [tasks, setTasks] = useState([]);

  console.log("useHttp started")
  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        requestData.url,{
            method:requestData.method ?requestData.method :'GET',
            body: JSON.stringify(requestData.body)? JSON.stringify(requestData.body) :null,
            headers:requestData.headers ? requestData.headers : {}
        }
      );
      console.log(response);
      
      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      console.log(data)
      applyData(data);
      
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;