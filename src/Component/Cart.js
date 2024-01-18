import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../redux/Action'

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(deleteCart(id))
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <table className="w-full text-left">
                <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Price</th>
                        {/* <th className="px-4 py-2">Quantity</th> */}
                        {/* <th className="px-4 py-2">Total</th> */}
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-medium divide-y divide-gray-200">
                    {
                        cartItems.map((item, i) =>
                            <tr key={i}>
                                <td className="px-4 py-2">
                                    <div className="flex items-center">
                                        <img src={item.thumbnail} alt="Product Image" className="w-12 h-12 rounded-md object-contain" />
                                        <div className="ml-4">
                                            <p>{item.title}</p>
                                            <p className="text-gray-500">{item.brand}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2">${item.price}</td>
                                {/* <td className="px-4 py-2">
                                    <input type="number" defaultValue={1} min={1} className="w-16 border-gray-300 text-right" />
                                </td> */}
                                {/* <td className="px-4 py-2">$99.99</td> */}
                                <td className="px-4 py-2">
                                    <button onClick={() => handleClick(i)} className="text-red-500 hover:text-red-700 focus:outline-none">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Cart