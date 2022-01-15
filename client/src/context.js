import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext()


const AppProvider = ({children}) => {
   
    const [data, setData] = useState([])

    useEffect(() => {
       fetch('http://localhost:5000/server', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
       }).then(res => res.json())
       .then(res => {
           console.log(res.data)
           setData(res.data)
       })
    },[])
    return <AppContext.Provider value={{
        data
    }}>
        {
            children
        }
    </AppContext.Provider>
}

export const useBookContext = () => {
    return useContext(AppContext)
}

export {AppProvider}