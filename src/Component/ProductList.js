import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/Action'

const ProductList = () => {
    const products = useSelector(state => state.products)
    const [filterItem , setFilterItem] = useState(products)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        
    }
const handleSearch = (e) =>{
    const search = products.filter(item => item.title.toUpperCase().includes(e.target.value.toUpperCase()))
setFilterItem(search)
}
const handleSort = (e) => {
const value = e.target.value
if (value ==='low'){
    setFilterItem([...filterItem].sort((a,b)=> a.price - b.price))
}else if (value === 'high')
 setFilterItem([...filterItem].sort((a,b)=> b.price - a.price))
}
    return (
        <div className="container mx-auto my-10">
            <div className="flex">
            <div className='w-1/2 '>  
            <h1 className="text-4xl font-bold mb-5">Products List</h1>
        </div>
        <div className='w-1/2'>
<label htmlFor=""> Search </label>
 <input type="text" placeholder='search' className='ms-3 border p-2 rounded w-100' onKeyUp={handleSearch} />
        </div>
            </div>
            <select name="" id="" onChange={handleSort}>
                <option value="">price</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    filterItem.map((product, i) =>
                        <div className="bg-white rounded-lg shadow p-5" key={i}>
                            <img src={product.thumbnail} alt="Product Image" className="w-full h-64 object-contain mb-4 rounded-lg shadow" />
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-500 mb-4">{product.brand}</p>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">${product.price}</span>
                               
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default ProductList