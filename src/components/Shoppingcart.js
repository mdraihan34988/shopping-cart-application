import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import Product from './Product'
import {addproduct , deleteproduct } from '../redux/cart/actionCreators'
import Cart from './Cart';

function Shoppingcart() {
    const productList = useSelector((state) => state.productList);
    const dispatch = useDispatch();

    const numberWithCommas =(x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const addproductHandler = (id) => {
        dispatch(addproduct(id))
    }

    const deleteproductHandler = (id) => {
        dispatch(deleteproduct(id))
    }

    const totalItem = () => {
        return productList.reduce((total,product) => total + product.productOrderedQuantity,0)
    }

    const totalPrice = () => {
        return productList.reduce((total,product) => total + product.productOrderedQuantity*product.productPrice,0)
    }

  return (
    <div className="bg-gray-50 h-full md:h-screen">
            <div className="grid place-items-center">
                <h1
                    className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                >
                    Shopping Cart
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div
                    className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
                >
                    <Product productList={productList} addproduct={addproductHandler} numberWithCommas={numberWithCommas}/>
                </div>
                <div
                    className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
                >
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <Cart productList={productList} addproduct={addproductHandler} deleteproduct={deleteproductHandler}/>

                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">{totalItem()}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">Tk. {numberWithCommas(totalPrice())}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Shoppingcart