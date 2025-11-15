import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'
import { Star, Heart } from 'lucide-react'
import { successToast } from '../utils/toast'
import { addFavouriteItem, removeFavouriteItem } from '../store/favouriteItem'

const ProductDetails = () => {

    const location = useLocation()
    const product = location.state
    const dispatch = useDispatch()

    const [isFavorite, setIsFavorite] = useState(false)

    // add to cart
    function handleAddCart(e, product) {
        e.stopPropagation()
        successToast(`${product.title} added in cart`)
        dispatch(addItem(product))
    }

    function toggleFavorite(e) {
        e.stopPropagation()

        if (isFavorite) {
            setIsFavorite(false)
            dispatch(removeFavouriteItem(product))
        } else {
            setIsFavorite(true)
            dispatch(addFavouriteItem(product))
        }
    }

    if (!product) {
        return <p className="p-6 text-gray-600">No product details found.</p>
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">

                <div className="relative flex justify-center items-center w-full md:w-1/2">

                    <button
                        onClick={toggleFavorite}
                        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
                    >
                        <Heart
                            size={26}
                            className="text-red-500"
                            fill={isFavorite ? "red" : "none"}
                        />
                    </button>

                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-64 h-64 object-contain"
                    />
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold">{product.title}</h2>

                    <p className="text-gray-500 text-sm">{product.category}</p>

                    <div className="flex items-center text-yellow-500">
                        <Star size={20} fill="gold" />
                        <span className="ml-1 font-semibold">{product.rating.rate}</span>
                        <span className="ml-2 text-gray-500">
                            ({product.rating.count} reviews)
                        </span>
                    </div>

                    <p className="text-3xl font-bold text-green-700">${product.price}</p>

                    <p className="text-gray-600">{product.description}</p>

                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={(e) => handleAddCart(e, product)}
                            className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                        >
                            Add to Cart
                        </button>

                        <button
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
