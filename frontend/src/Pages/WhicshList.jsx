import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Star } from 'lucide-react';
import { removeFavouriteItem } from '../store/favouriteItem';

const WhicshList = () => {
    const favouriteItems = useSelector((state) => state.favouriteItems.favouriteItems);
    const dispatch = useDispatch();

    return (
        <div className="p-6">
            {favouriteItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">

                    {favouriteItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow bg-white">

                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />

                                <div>
                                    <h2 className="font-semibold text-lg">{item.title}</h2>
                                    <p className="text-sm text-gray-500">{item.category}</p>

                                    <div className="flex items-center text-yellow-500 text-sm mt-1">
                                        <Star size={16} fill="gold" />
                                        <span className="ml-1">{item.rating.rate}</span>
                                        <span className="ml-2 text-gray-500">
                                            ({item.rating.count} reviews)
                                        </span>
                                    </div>

                                    <p className="text-gray-900 font-bold mt-1">${item.price}</p>

                                    <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                                        {item.description}
                                    </p>


                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">
                                    Buy
                                </button>

                                <button
                                    onClick={() => dispatch(removeFavouriteItem(item.id))}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WhicshList;
