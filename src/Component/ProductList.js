import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/Action'

const ProductList = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(addCart(id))
    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold mb-5">Products List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map((product, i) =>
                        <div className="bg-white rounded-lg shadow p-5" key={i}>
                            <img src={product.thumbnail} alt="Product Image" className="w-full h-64 object-contain mb-4 rounded-lg shadow" />
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-500 mb-4">{product.brand}</p>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">${product.price}</span>
                                <button onClick={() => handleClick(i)} className="bg-blue-500 text-white px-4 py-2 ml-auto rounded-lg">Add to Cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default ProductList