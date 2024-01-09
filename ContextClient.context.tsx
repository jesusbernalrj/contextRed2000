import { createContext, useContext, useState } from "react";
import { ClientesPropsModel } from "../../../../models/clientes/clientes.model";


interface ClientContextProps {
    valueSelect: keyof ClientesPropsModel
    setValueSelect: React.Dispatch<React.SetStateAction<keyof ClientesPropsModel>>
    columnasShow: boolean
    setColumnasShow: React.Dispatch<React.SetStateAction<boolean>>
    showEyesClients: boolean
    setshowEyesClients: React.Dispatch<React.SetStateAction<boolean>>
}
export const ClientContext = createContext({} as ClientContextProps);

export const ClientProvider = ({children}: {children: React.ReactNode}) => {
    const [valueSelect, setValueSelect] = useState<keyof ClientesPropsModel>('name');
    const [columnasShow, setColumnasShow] = useState(false)
    const [showEyesClients, setshowEyesClients] = useState(false)

    return(
        <ClientContext.Provider value={{
            valueSelect, setValueSelect, columnasShow, setColumnasShow,
            showEyesClients, setshowEyesClients
        }}>
            {children}
        </ClientContext.Provider>
    )
}

export const useClientContext = () => {
    const context = useContext(ClientContext);
    if (context === undefined) {
      throw new Error(
        "useClientContext debe estar dentro del proveedor ClientContext"
      );
    }
    return context
}