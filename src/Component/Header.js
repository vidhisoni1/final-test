import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const cart = useSelector(state => state.cartItems)
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto flex justify-end items-center px-3 py-4">
                {/* <a to="/" className="text-xl font-bold text-gray-800">PR9</a> */}
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-gray-600 text-xl font-semibold hover:text-gray-900">Products</Link></li>
                        <li><Link to="/cart" className="text-gray-600 text-xl font-semibold hover:text-gray-900">Cart({cart.length})</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header