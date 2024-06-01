import { useEffect, useState } from 'react'
import axios from 'axios'

export const useField = (type) => {
    const [value, setValue] = useState('')
    
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
}

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get(baseUrl).then(res => {
            setResources(res.data)
        })
    }, [])
    
    const getAll = async () => {
        
    }
  
    const create = async (resource) => {
      const res = await axios.post(baseUrl, resource)
      setResources(resources.concat(res.data))
      return res.data
    }
  
    const service = {
      create,
      getAll,
    }
  
    return [
      resources, service
    ]
}