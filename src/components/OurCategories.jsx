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
    const existingCart = JSON.parse(localStorage.getItem("Products")) || [];

    const cartItem = {
      productName: item.title,
      price: item.price,
      imageSrc: item.image,
    };

    existingCart.push(cartItem);
    localStorage.setItem("Products", JSON.stringify(existingCart));
  };
    return (
        <div className=' max-w-[1140px] mx-auto mt-[140px] '>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Shop Our Categories</h4>
                    <p className='font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#414143] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <button className='flex items-center justify-center px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium py-3 sm:py-4 md:py-4 bg-[#01C6B5] text-white cursor-pointer hover:bg-[#00b39a] transition-colors whitespace-nowrap'>
                    View all
                </button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full'>
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
                            className='absolute top-2 sm:top-3 right-2 sm:right-3 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
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















// import React from 'react'
// import Button from './common/Btn'

// function OurCategories() {

//   const CARD = [
//     {
//       sale: "sale",
//       img: ''

//     },
//   ]
//   return (
//     <div className='mt-[140px]'>
//       <div className='max-w-[1140px] mx-auto px-3 '>
//         <div className='flex flex-col gap-[50px]'>
//           <div className='flex flex-row justify-between items-center'>
//             <div className='flex flex-col gap-[8px]'>
//               <h3 className='font-semibold text-[48px] leading-[100%] tracking-[0%] text-[#000000]'>Shop Our Categories</h3>
//               <p className='font-normal text-[20px] leading-[160%] tracking-[0%] text-[#414143]'>Use this area to describe the collection.</p>
//             </div>
//             <Button className="px-[26px] py-[16px] text-[20px] font-medium "
//               text={"View All "}
//             />
//           </div>

//           <div className='flex flex-row flex-wrap -mx-3 gap-y-[24px]'>
//             <div className='w-[25%] px-3'>
//               <div className='border border-[#0000000D] bg-white '>
//                 <div className='relative max-w-[267px]'>
//                   <div className='flex items-center justify-between  '>
//                     <Button className="  absolute left-[11px] top-[11px] font-normal text-[14px] py-1 px-3"
//                       text={"Sale"}
//                     />
//                     <span className='absolute right-[14px] top-[14px] cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
//                     </svg>
//                     </span>
//                   </div>
//                   <img src="/assets/images/png/bottle_categories.png" alt="bottle-photo" className='w-full' />
//                 </div>
//                 <div className='flex flex-row justify-between items-center pt-[16px] px-[14px]'>
//                   <h6 className='font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#414143]'>Insulated Sports Bottle </h6>
//                   <span className='font-normal text-[16px] leading-[100%] tracking-[0%]'>€14.95</span>
//                 </div>
//               </div>
//             </div>


//             <div className='w-[25%] px-3'>
//               <div className='border border-[#0000000D] bg-white '>
//                 <div className=''>
//                   <div className='flex items-center justify-between  '>
//                     <Button className="  absolute left-[11px] top-[11px] font-normal text-[14px] py-1 px-3"
//                       text={"Sale"}
//                     />
//                     <span className='absolute right-[14px] top-[14px] cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
//                     </svg>
//                     </span>
//                   </div>
//                   <div className='bg-[#EFEFEF] flex items-center justify-center '> 
//                     <img src="/assets/images/png/mat_categories.png" alt="bottle-photo" className='' />
//                   </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center pt-[16px] px-[14px]'>
//                   <h6 className='font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#414143]'>Insulated Sports Bottle </h6>
//                   <span className='font-normal text-[16px] leading-[100%] tracking-[0%]'>€14.95</span>
//                 </div>
//               </div>
//             </div>



//           </div>
//         </div>
//       </div>
//     </div>
//   )




// }

// export default OurCategories















// const carddata = [
//   {
//     id: 1,
//     name: '/Categories1.png',
//     price: '€14.95',
//     image: '/assets/images/png/bottle_categories.png',
//     dics: 'Insulated Sports Bottle ',
//   },
//   {
//     id: 2,
//     name: '/Categories2.png',
//     price: '€14.95',
//     image: '/CATEGORIES2.png',
//     dics: 'Womens Long Wavy'
//   },
//   {
//     id: 3,
//     name: '/Categories3.png',
//     price: '€14.95',
//     image: '/assets/images/png/mat_categories.png',
//     dics: 'Acupressure Mat'
//   },
//   {
//     id: 4,
//     name: '/Categories4.png',
//     price: '€14.95',
//     image: '/CATEGORIES4.png',
//     dics: 'Liberty Pattern Socks',
//     sale: 'sale'
//   },
//   {
//     id: 5,
//     name: '/Categories5.png',
//     price: '€14.95',
//     image: '/CATEGORIES5.png',
//     dics: 'Mat Bag with Pocket'
//   },
//   {
//     id: 6,
//     name: '/Categories6.png',
//     price: '€14.95',
//     image: '/CATEGORIES6.png',
//     dics: 'Tibetan Singing Bowls',
//     sale: 'sale'
//   },
//   {
//     id: 7,
//     name: '/Categories7.png',
//     price: '€14.95',
//     image: '/categories7.png',
//     dics: 'Soft Yoga Cushion'
//   }, {
//     id: 8,
//     name: '/Categories8.png',
//     price: '€14.95',
//     image: '/CATEGORIES8.png',
//     dics: 'Cotton Yoga Pants',
//     sale: 'sale'
//   },
//   {
//     id: 9,
//     name: '/Categories9.png',
//     price: '€14.95',
//     image: '/CATEGORIES9.png',
//     dics: 'Womens Long Wavy',
//     sale: 'sale'
//   },
//   {
//     id: 10,
//     name: '/Categories10.png',
//     price: '€14.95',
//     image: '/CATEGORIES10.png',
//     dics: 'Travel Yoga Bag'
//   },
//   {
//     id: 11,
//     name: '/Categories11.png',
//     price: '€14.95',
//     image: '/CATEGORIES11.png',
//     dics: 'Yoga Workout Shorts',
//     sale: 'sale'
//   },
//   {
//     id: 12,
//     name: '/Categories12.png',
//     price: '€14.95',
//     image: '/CATEGORIES12.png',
//     dics: 'Cork Yoga Mat'
//   },
// ];
// return (

//   <div>
//     <div className='max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-285 mx-auto flex mt-10 sm:mt-20 md:mt-28 lg:mt-35 flex-col sm:flex-row justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-0'>
//       <div>
//         <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Shop Our Categories</h1>
//         <p className='font-normal text-[#414143] text-sm sm:text-base md:text-lg lg:text-[20px] mt-2'>Use this area to describe the collection.</p>
//       </div>
//       <button className='w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 lg:h-14.25 border-0 bg-[#01C6B5] text-white font-medium hover:bg-[#00a896] transition-colors whitespace-nowrap'>View All </button>
//     </div>
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-285 mx-auto px-4 sm:px-6 md:px-8 lg:px-0'>
//       {carddata.map((cards) => (
//         <div key={cards.id}
//           className=' max-w-66.75 aspect-square sm:aspect-auto shadow-sm z-10 hover:bg-[#0000004D] hover:scale-[1.04] transition-transform duration-200 flex flex-col'
//         >
//           <div className='relative w-full h-1/3'>
//             {cards.sale && <div className='absolute z-10 top-2 left-2 sm:top-3 sm:left-3'><h1 className='text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-[#01C6B5] flex justify-center items-center rounded'>{cards.sale}</h1></div>}
//             <div className='absolute z-10 top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8.75 sm:h-8.75 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors'>
//               <svg
//                 width="18"
//                 height="16"
//                 viewBox="0 0 22 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className='w-4 h-4 sm:w-5 sm:h-5'
//               >
//                 <path
//                   d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.6146 9.81908 2.02505 9.03577 1.61824C8.25245 1.21144 7.38265 0.999377 6.5 1Z"
//                   stroke="green"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className=' max-w-66.75 max-h-62.75 flex justify-center items-center  relative group'>
//             <img src={cards.image} alt={cards.dics} className=' object-contain  w-full h-full bg-[#0000000D] ' />
//             <div className='hidden group-hover:flex justify-center items-center absolute inset-0'>
//               <button className='cursor-pointer active:bg-[#007a70] bg-[#01C6B5] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium text-white rounded hover:bg-[#00a896] transition-colors'>Add to cart</button>
//             </div>
//           </div>
//           <div className='flex flex-row w-full h-1/6 px-3 py-2  max-w-66.75 justify-between'>
//             <h1 className='text-sm sm:text-base font-medium line-clamp-1'>{cards.dics}</h1>
//             <p className='text-sm sm:text-base font-semibold '>{cards.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )
