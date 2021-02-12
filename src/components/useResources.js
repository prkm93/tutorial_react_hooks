import {useState, useEffect} from 'react'
import axios from 'axios';

export default function useResources (resourceName) {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
      fetchResources(resourceName);
    }, [resourceName]);
  
    const fetchResources = async(resources) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resources}`);
      setResources(response.data);
    }
    
    return resources;
}
