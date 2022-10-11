import { ADDPRODUCTTOCART , DELETEPRODUCTTOCART} from "./actionTypes"

export const addproduct = (id) => {
    return {
        type : ADDPRODUCTTOCART,
        payload : {
            productId : id
        }
    }
}

export const deleteproduct = (id) => {
    return {
        type : DELETEPRODUCTTOCART,
        payload : {
            productId : id
        }
    }
}