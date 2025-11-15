import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice';
import { Star } from 'lucide-react'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    function handleAddCart(product) {

        console.log(product)

        toast.success(`${product.title} added in cart`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });

        dispatch(addItem(product))
    }

    return (
        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white">
  
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />

            <h2 className="font-semibold text-lg mb-1">{product.title}</h2>

            <p className="text-sm text-gray-500 mb-1">{product.category}</p>

            <div className="flex items-center text-yellow-500 mb-1">
                <Star size={18} fill="gold" />
                <span className="ml-1 font-medium">{product.rating.rate}</span>
                <span className="ml-2 text-gray-600 text-sm">({product.rating.count} reviews)</span>
            </div>

            <p className="text-gray-900 font-bold mb-2">${product.price}</p>

            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {product.description}
            </p>

            <button
                onClick={() => handleAddCart(product)}
                className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
