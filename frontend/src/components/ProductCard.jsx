import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { successToast } from '../utils/toast'
import { addFavouriteItem } from '../store/favouriteItem'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // add to cart
    function handleAddCart(e, product) {
        e.stopPropagation()
        successToast(`${product.title} added to cart`)
        dispatch(addItem(product))
    }

    // product details
    function handleProductDetails(product) {
        navigate('/product-details', { state: product })
    }

    // add to favourite
    function handleAddFavourite(e, product) {
        e.stopPropagation()
        successToast(`${product.title} added to favourites`)
        dispatch(addFavouriteItem(product))
    }

    return (
        <div onClick={() => handleProductDetails(product)} key={product.id} className="group relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">

            {/* Image Section */}
            <div className="overflow-hidden rounded-lg">
                <img src={product.image} alt={product.title} className="w-full h-48 object-contain transition-transform group-hover:scale-110" />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>

                {/* Rating Section */}
                <div className="flex items-center text-yellow-500 mb-2">
                    <Star size={18} fill="gold" />
                    <span className="ml-1 font-medium">{product.rating.rate}</span>
                    <span className="ml-2 text-gray-600 text-sm">({product.rating.count} reviews)</span>
                </div>

                {/* Price and Description */}
                <p className="text-gray-900 font-bold text-lg mb-3">${product.price}</p>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={(e) => handleAddCart(e, product)}
                        className="bg-blue-600 text-white px-4 py-2 flex-1 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={(e) => handleAddFavourite(e, product)}
                        className="bg-yellow-600 text-white px-4 py-2 flex-1 rounded-md shadow-md hover:bg-yellow-700 transition duration-200"
                    >
                        Add to Favourites
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 bg-gray-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center rounded-lg text-white">
                <img src={product.image} alt={product.title} className="w-full h-48 object-contain transition-transform group-hover:scale-110" />

            </div>
        </div>
    )
}

export default ProductCard
