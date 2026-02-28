import React from 'react'
import Button from './common/Btn'

function FromTheBlog() {
    const CARD_DATA = [
        {
            img: '/assets/images/png/FromTheBlog_1.png',
            date: 'May 25, 2025',
            title: 'Our Origins in Movement',
            description:'Rooted in France, Yogaova™ emerged from a desire to bring more style, sustainability....'
        },
        {
            img: '/assets/images/png/FromTheBlog_2.png',
            date: 'May 25, 2025',
            title: 'Our Origins in Movement',
            description: 'Rooted in France, Yogaova™ emerged from a desire to bring more style, sustainability....'
        },
        {
            img: '/assets/images/png/FromTheBlog_3.png',
            date: 'May 25, 2025',
            title: 'Our Origins in Movement',
            description: 'Rooted in France, Yogaova™ emerged from a desire to bring more style, sustainability....'
        },
    ];

    return (
        <div className='mt-[140px]'>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <div className='flex flex-col gap-[50px]'>
                    <div className='flex flex-row justify-between items-center max-sm:flex-col max-sm:gap-y-[10px]'>
                        <h3 className='font-semibold text-[48px] leading-[100%] tracking-[0%] text-[#000000]'>From The Blog</h3>
                        <Button className="px-[26px] py-[16px] text-[20px] font-medium "
                            text={"view All Blogs"}
                        />
                    </div>

                    <div className='flex flex-row -mx-3 flex-wrap max-lg:gap-y-[20px]'>
                        {CARD_DATA.map((card, i) => {
                            return <div key={i} className='w-full  md:w-[50%] lg:w-[33.33%] px-3'>
                                <div>
                                    <img src={card.img} alt="pic" className='w-full mb-[20px]'/>
                                </div>
                                <div>
                                    <span className='font-normal text-[16px] max-md:text-[22px] max-[450px]:text-[16px] leading-[100%] tracking-[0%] text-[#414143]'>{card.date}</span>
                                    <h6 className='pt-[13px] pb-[5px] capitalize font-semibold text-[24px] max-md:text-[30px] max-[450px]:text-[24px] leading-[100%] tracking-[0%] text-[#000000]'>{card.title}</h6>
                                    <p className='pt-[5px] pb-[9px] font-normal text-[16px] max-md:text-[22px] max-[450px]:text-[16px] leading-[160%] tracking-[0%]'>{card.description}</p>
                                    <button className='w-full font-medium text-[16px] max-md:text-[22px] max-[450px]:text-[16px]  leading-[160%] tracking-[0%] text-[#01C6B5] flex flex-row items-center gap-[6px]'>
                                        Read More
                                        <span><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.4977 6.05331C17.7906 5.76042 17.7906 5.28554 17.4977 4.99265L12.7248 0.21968C12.4319 -0.0732134 11.957 -0.0732135 11.6641 0.21968C11.3712 0.512573 11.3712 0.987447 11.6641 1.28034L15.9067 5.52298L11.6641 9.76562C11.3712 10.0585 11.3712 10.5334 11.6641 10.8263C11.957 11.1192 12.4319 11.1192 12.7248 10.8263L17.4977 6.05331ZM0 5.52298L-6.55671e-08 6.27298L16.9674 6.27298L16.9674 5.52298L16.9674 4.77298L6.55671e-08 4.77298L0 5.52298Z" fill="#01C6B5" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FromTheBlog