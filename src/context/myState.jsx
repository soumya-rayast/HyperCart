import React, { useState } from 'react'
import MyContext from './myContext'


const myState = ({ children }) => {
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <MyContext.Provider value={{ loading, setLoading }} >
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default myState
