import { ADDPRODUCTTOCART, DELETEPRODUCTTOCART } from "./actionTypes"

const InitialState = {
    productList : [{
            productId : 1,
            productName : 'Asus Vivobook X515MA',
            productAvailableQuantity : 20,
            productPrice : 35500,
            productOrderedQuantity : 0
        },{
            productId : 2,
            productName : 'Dell E1916HV 18.5 Inch',
            productAvailableQuantity : 35,
            productPrice : 9300,
            productOrderedQuantity : 0
        },{
            productId : 3,
            productName : 'Canon Eos 4000D 18MP',
            productAvailableQuantity : 72,
            productPrice : 36500,
            productOrderedQuantity : 0
        }
    ]
}

const cartReducer = (state = InitialState , action) => {
    let copy = {...state, productList : [...state.productList]}

    switch (action.type) {

        case ADDPRODUCTTOCART : 
            copy.productList.map((value,key) => {
                if (value.productId === action.payload.productId ) {
                    copy.productList[key] = {...copy.productList[key] , productOrderedQuantity : copy.productList[key].productOrderedQuantity + 1,productAvailableQuantity : copy.productList[key].productAvailableQuantity-1}
                }
                return copy.productList;
            })
            return copy;

        case DELETEPRODUCTTOCART :
            copy.productList.map((value,key) => {
                if (value.productId === action.payload.productId ) {
                    copy.productList[key] = {...copy.productList[key] , productOrderedQuantity : copy.productList[key].productOrderedQuantity - 1,productAvailableQuantity : copy.productList[key].productAvailableQuantity+1}
                }
                return copy.productList;
            })
            return copy;

        default :
            return state;
    }
}

export default cartReducer