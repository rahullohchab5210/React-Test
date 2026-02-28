import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function FeaturedProducts() {

    
        const sliderRef = React.useRef(null);

    const handleAddToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("Products")) || [];
        
        cart.push({
            productName: item.productName,
            price: item.price,
            imageSrc: item.imageSrc,
            quantity: 1,
        });

        localStorage.setItem("Products", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className='mt-[130px]'>
            <div className='max-w-[1140px] px-3 mx-auto w-full'>
                <div className='flex flex-col gap-[50px]'>
                    <div className='flex flex-row justify-between sm:items-center max-sm:flex-col '>
                        <div className='flex flex-col gap-[8px]'>
                            <h3 className='font-semibold text-[48px] leading-[100%] tracking-[0%] text-[#000000]'>Featured Products</h3>
                            <p className='font-normal text-[20px] leading-[160%] tracking-[0%] text-[#414143]'>Use this area to describe the collection.</p>
                        </div>
                        <div className='flex flex-row gap-[14px] items-center'>
                            <button onClick={() => sliderRef.current.slickPrev()} className='prev-btn  group w-[50px] h-[50px] border border-[#414143]/65 flex items-center justify-center rounded-[99999997781963080000000px] group hover:bg-[#01C6B5] hover:border-[#01C6B5]  cursor-pointer'>
                                <span><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill="#414143" className='group-hover:fill-white' />
                                </svg>
                                </span>
                            </button>
                            <button onClick={() => sliderRef.current.slickNext()} className='next-btn  group w-[50px] h-[50px] border border-[#414143]/65 flex items-center justify-center rounded-[99999997781963080000000px] hover:bg-[#01C6B5] hover:border-[#01C6B5] cursor-pointer rotate-180'>
                                <span><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill="#414143" className='group-hover:fill-white' />
                                </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='  -mx-3 max-lg:gap-y-[30px]'>
                        <Slider ref={sliderRef} {...settings}>
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-3'>
                                <div className='bg-[#F5F5F5] px-[24px] pt-[24px]  relative group'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <span className='bg-white border border-[#0000000D] rounded-[88px] py-[10px] px-5 font-normal text=[20px] leading-[100%] tracking-[0%] text-[#000000]'>€14.95</span>
                                            <span className='cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div className='flex justify-center pt-[51.97px] pb-[71.03px]  '>
                                            <img src="/assets/images/png/FeaturedProducts.png" alt="round-yoga-mat" />
                                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <button onClick={() =>
                                                    handleAddToCart({
                                                        productName: "Round Yoga Mat",
                                                        price: "€14.95",
                                                        imageSrc: "/assets/images/png/FeaturedProducts.png",
                                                    })
                                                } className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='pt-[24px] text-center font-normal text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>Round Yoga Mat</h5>
                            </div>

                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-3'>
                                <div className='bg-[#F5F5F5] px-[24px] pt-[24px]  relative group '>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <span className='bg-white border border-[#0000000D] rounded-[88px] py-[10px] px-5 font-normal text=[20px] leading-[100%] tracking-[0%] text-[#000000]'>€14.95</span>
                                            <span className='cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div className='flex justify-center pt-[35px] pb-[70px]'>
                                            <img src="/assets/images/png/FeaturedProducts_2.png" alt="round-yoga-mat" />
                                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <button onClick={() =>
                                                    handleAddToCart({
                                                        productName: "Non-Slip Travel Yoga Mat",
                                                        price: "€14.95",
                                                        imageSrc: "/assets/images/png/FeaturedProducts_2.png",
                                                    })
                                                } className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='pt-[24px] text-center font-normal text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>Non-Slip Travel Yoga Mat</h5>
                            </div>

                            <div className='w-full md:w-[50%] lg:w-[33.33%]  px-3'>
                                <div className='bg-[#F5F5F5] px-[24px] pt-[23px]    relative group'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <span className='bg-white border border-[#0000000D] rounded-[88px] py-[10px] px-5 font-normal text=[20px] leading-[100%] tracking-[0%] text-[#000000]'>€14.95</span>
                                            <span className='cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div className='flex justify-center pb-[45.16px]'>
                                            <img src="/assets/images/png/FeaturedProducts_3.png" alt="round-yoga-mat" />
                                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <button onClick={() =>
                                                    handleAddToCart({
                                                        productName: "Foldable Yoga Mat",
                                                        price: "€14.95",
                                                        imageSrc: "/assets/images/png/FeaturedProducts_3.png",
                                                    })
                                                } className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='pt-[24px] text-center font-normal text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>Foldable Yoga Mat</h5>
                            </div>



                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-3'>
                                <div className='bg-[#F5F5F5] px-[24px] pt-[24px]  relative group'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <span className='bg-white border border-[#0000000D] rounded-[88px] py-[10px] px-5 font-normal text=[20px] leading-[100%] tracking-[0%] text-[#000000]'>€14.95</span>
                                            <span className='cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div className='flex justify-center pt-[51.97px] pb-[71.03px]  '>
                                            <img src="/assets/images/png/FeaturedProducts.png" alt="round-yoga-mat" />
                                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <button onClick={() =>
                                                    handleAddToCart({
                                                        productName: "Round Yoga Mat",
                                                        price: "€14.95",
                                                        imageSrc: "/assets/images/png/FeaturedProducts.png",
                                                    })
                                                } className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='pt-[24px] text-center font-normal text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>Round Yoga Mat</h5>
                            </div>
 
                            
                            <div className='w-full md:w-[50%] lg:w-[33.33%] px-3'>
                                <div className='bg-[#F5F5F5] px-[24px] pt-[24px]  relative group '>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <span className='bg-white border border-[#0000000D] rounded-[88px] py-[10px] px-5 font-normal text=[20px] leading-[100%] tracking-[0%] text-[#000000]'>€14.95</span>
                                            <span className='cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div className='flex justify-center pt-[35px] pb-[70px]'>
                                            <img src="/assets/images/png/FeaturedProducts_2.png" alt="round-yoga-mat" />
                                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <button onClick={() =>
                                                    handleAddToCart({
                                                        productName: "Non-Slip Travel Yoga Mat",
                                                        price: "€14.95",
                                                        imageSrc: "/assets/images/png/FeaturedProducts_2.png",
                                                    })
                                                } className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='pt-[24px] text-center font-normal text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>Non-Slip Travel Yoga Mat</h5>
                            </div>


                            <div className='w-full md:w-[50%] lg:w-[33.33%]  px-3'>
                                <div className='bg-[#F5F5F5] px-[24px] pt-[23px]    relative group'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <span className='bg-white border border-[#0000000D] rounded-[88px] py-[10px] px-5 font-normal text=[20px] leading-[100%] tracking-[0%] text-[#000000]'>€14.95</span>
                                            <span className='cursor-pointer w-[35px] h-[35px] flex items-center justify-center bg-[#FFFFFFA8] rounded-[58.33%]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div className='flex justify-center pb-[45.16px]'>
                                            <img src="/assets/images/png/FeaturedProducts_3.png" alt="round-yoga-mat" />
                                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <button onClick={() =>
                                                    handleAddToCart({
                                                        productName: "Foldable Yoga Mat",
                                                        price: "€14.95",
                                                        imageSrc: "/assets/images/png/FeaturedProducts_3.png",
                                                    })
                                                } className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='pt-[24px] text-center font-normal text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>Foldable Yoga Mat</h5>
                            </div>

                           
                            </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
