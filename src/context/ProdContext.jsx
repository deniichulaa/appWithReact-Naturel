import { createContext, useState } from "react";

export const ProdContext = createContext();

const ProdProvider = (props) => {
    const [products, setProducts] = useState([]);
    console.log("🚀 ~ file: ProdContext.jsx ~ line 7 ~ ProdProvider ~ products", products)
    
    

    return(
        <ProdContext.Provider value={{products, setProducts}} >
            {props.children}
        </ProdContext.Provider>
    )
}
export default ProdProvider;