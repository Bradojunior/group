import {useContext,useState, createContext} from 'react'

export function IsuserLogged({children}){ 
    const [usename,setusename] = useState('')
    return(
        <>
        <Un.Provider value={usename}>
            <Setun.Provider value={setusename}>
                {children}
            </Setun.Provider>
        </Un.Provider>
        </>
    )
}
export function Username(){
    return useContext(Un)
}
export function Usernameset(){
    return useContext(Setun)
}


const Un = createContext()
const Setun = createContext()

