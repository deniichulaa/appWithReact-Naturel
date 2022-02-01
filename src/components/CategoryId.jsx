import { useParams } from "react-router-dom"


const CategoryId = () => {
    const {id} = useParams();

    return(
        <>
            <p>
                Proximamente apareceran los productos de la categoria {id}
            </p>
        </>
    )
}

export default CategoryId