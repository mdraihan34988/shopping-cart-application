import Swal from "sweetalert2";
import { ADDPRODUCTTOCART, DELETEPRODUCTTOCART } from "../cart/actionTypes"


 const checkProductQuantity = (store) => (next) => (action) => {
    
    let prevState = store.getState();
    if(action.type === ADDPRODUCTTOCART) {
        let product = prevState.productList.find((product) => product.productId === action.payload.productId)
        if(product) {
            if(product.productAvailableQuantity -1 >= 0) {
               return next(action);
            } else {
                Swal.fire(
                    `${[product.productName]} is Out of Stock!`,
                    '',
                    "error"
                  );
            }
        }
        
    } else if(action.type === DELETEPRODUCTTOCART) {
        return next(action);
    }
}

export default checkProductQuantity