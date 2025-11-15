import React from 'react';
import { Heart, ShoppingCart, CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const favouriteItems = useSelector(state => state.favouriteItems.favouriteItems)
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md">

            <div className="text-xl font-bold">
                iCart
            </div>

            <div>
                <ul className="flex space-x-6">
                    <li className="hover:text-yellow-400 cursor-pointer transition-colors"> <Link to={'/'} >Home</Link></li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-colors"> <Link to={'#'} >About</Link></li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-colors"> <Link to={'#'} >Contact</Link></li>
                </ul>
            </div>

            <div className="flex space-x-6 items-center">

                <Link to={'/cart'} className="relative cursor-pointer hover:text-yellow-400 transition-colors">
                    <ShoppingCart size={28} />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {cartItems.length}
                    </span>
                </Link>

                <Link to={'/whish-list'} className="relative cursor-pointer hover:text-yellow-400 transition-colors">
                    <Heart size={28} />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {favouriteItems.length}
                    </span>
                </Link>

                <div className="hover:text-yellow-400 cursor-pointer transition-colors"><CircleUser /></div>
            </div>
        </div>
    );
};

export default Navbar;
