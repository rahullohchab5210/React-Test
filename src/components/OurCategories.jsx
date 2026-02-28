import React, { useState } from 'react'
 

const Like = ({ isLiked }) => {
    return (
        <svg width="21" height="22" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.72063 19.5135L8.42839 18.3371C3.83869 14.1752 0.808594 11.4214 0.808594 8.06153C0.808594 5.30771 2.96531 3.15991 5.71021 3.15991C7.26091 3.15991 8.74922 3.88179 9.72063 5.01362C10.692 3.88179 12.1804 3.15991 13.731 3.15991C16.476 3.15991 18.6327 5.30771 18.6327 8.06153C18.6327 11.4214 15.6026 14.1752 11.0129 18.3371L9.72063 19.5135Z"
                fill={isLiked ? "#01C6B5" : "none"}
                stroke="#01C6B5"
                strokeWidth="1.2"
            />
        </svg>
    );
};

const cards = [
    { title: 'Insulated Sports Bottle', image: '/assets/images/png/categories_1.png', price: '€14.95' },
    { title: 'Womens Long Wavy', image: '/assets/images/png/categories_2.png', price: '€14.95' },
    { title: 'Acupressure Mat', image: '/assets/images/png/categories_3.png', price: '€44.95' },
    { title: 'Liberty Pattern Socks', image: '/assets/images/png/categories_4.png', price: '€13.95', sale: true },
    { title: 'Mat Bag with Pocket', image: '/assets/images/png/categories_5.png', price: '€26.95' },
    { title: 'Tibetan Singing Bowls', image: ' /assets/images/png/categories_6.png', price: '€35.95', sale: true },
    { title: 'Soft Yoga Cushion', image: '/assets/images/png/categories_7.png', price: '€22.95' },
    { title: 'Cotton Yoga Pants', image: '/assets/images/png/categories_8.png', price: '€44.95', sale: true },
    { title: 'Womens Long Wavy', image: '/assets/images/png/categories_9.png', price: '€14.95', sale: true },
    { title: 'Travel Yoga Bag', image: '/assets/images/png/categories_10.png', price: '€23.95' },
    { title: 'Yoga Workout Shorts', image: '/assets/images/png/categories_11.png', price: '€31.95', sale: true },
    { title: 'Cork Yoga Mat', image: '/assets/images/png/categories_12.png', price: '€44.95' },
]
const Categories = () => {
    const [liked, setLiked] = useState({})
    const toggleLike = (index) => {
        setLiked(prev => ({ ...prev, [index]: !prev[index] }))
    }
    
    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("Products")) || [];

        const existingIndex = cart.findIndex(
            (p) => p.productName === item.productName
        );
        if (existingIndex !== -1) { 
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                productName: item.title,
                 price: item.price,
                 imageSrc: item.image,
            });
        }

        localStorage.setItem("Products", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };
    

    

    return (
        <div className=' max-w-[1140px] mx-auto px-3 mt-[140px] max-sm:mt-[80px]'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>Shop Our Categories</h4>
                    <p className='font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#414143] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <button className='flex items-center justify-center px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium py-3 sm:py-4 md:py-4 bg-[#01C6B5] text-white cursor-pointer hover:bg-[#00b39a] transition-colors whitespace-nowrap'>
                    View all
                </button>
            </div>
            <div className='grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full'>
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className='bg-[#F5F5F5] flex flex-col cursor-pointer relative group overflow-hidden shadow-sm hover:shadow-lg transition-shadow'
                    >
                        {item.sale && (
                            <div className='absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#01C6B5] text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 z-10 rounded'>
                                Sale
                            </div>
                        )}
                        <button
                            className='cursor-pointer absolute top-2 sm:top-3 right-2 sm:right-3 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
                            onClick={() => toggleLike(index)}
                            aria-label='Toggle like'
                        >
                            <Like isLiked={liked[index]} />
                        </button>
                        <div className='relative h-40 sm:h-48 md:h-56 lg:h-64 bg-[#F5F5F5] px-4 sm:px-6 md:px-8 flex items-center justify-center'>
                            <img
                                src={item.image}
                                className='w-full h-full object-contain'
                                alt={item.title}
                            />
                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                <button className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors' onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className='bg-white flex flex-row items-center justify-between px-3 sm:px-4 py-2 sm:py-3 gap-2'>
                            <h3 className='text-xs sm:text-sm md:text-base font-normal text-black flex-1 truncate'>{item.title}</h3>
                            <span className='text-xs sm:text-sm md:text-base font-normal text-black flex-shrink-0'>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categories

