import React from 'react'

function Footer() {
    return (
        <div className='bg-[#414143] pt-[90px]'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className='flex flex-row justify-between max-md:flex-col max-md:gap-y-[30px]'>
                    <div className='max-w-[326px] text-white'>
                        <h2 className='pb-[19px]'>Eco-friendly yoga mats that blend-high performance.</h2>
                        <span className=' pb-[20px]'>Follow us On :</span>
                        <div className='flex flex-row gap-[14px] mt-[20px]'>
                            <a href="" className='w-[32px] h-[32px] flex items-center justify-center border border-[#FFFBF2] rounded-[100px]'><svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.1298 9.8538C3.31106 9.80454 2.34832 9.76024 1.75657 9.64452C1.3562 9.56763 1.00829 9.39692 0.753189 9.14933C0.556029 8.96194 0.399234 8.67603 0.277587 8.27935C0.17324 7.94888 0.1326 7.67391 0.0746601 7.00228C-0.0140348 5.48647 -0.0351788 4.24718 0.0746601 2.86247C0.165277 2.09779 0.209213 1.19002 0.811129 0.66043C1.09534 0.412573 1.42595 0.253069 1.79721 0.187131C2.37716 0.082619 4.84798 0 7.40585 0C9.95796 0 12.4343 0.082619 13.0148 0.187131C13.4786 0.269749 13.9135 0.517345 14.1689 0.836614C14.7181 1.65655 14.7277 2.67612 14.7835 3.47364C14.8065 3.85364 14.8065 6.01137 14.7835 6.39137C14.6967 7.65176 14.6269 8.09769 14.4298 8.56005C14.3078 8.85195 14.2038 9.00598 14.0236 9.17669C13.7411 9.43939 13.381 9.61413 12.9912 9.67762C10.5519 9.85172 8.48063 9.88951 6.1298 9.8538ZM9.86514 4.78929C8.50808 4.10097 7.20869 3.4627 5.88047 2.80201V6.75468C7.27816 6.03352 8.75165 5.37283 9.87091 4.78382L9.86514 4.78929Z" fill="#EFEFEF" />
                            </svg>
                            </a>
                            <a href="" className='w-[32px] h-[32px] flex items-center justify-center border border-[#FFFBF2] rounded-[100px]'><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.63905 7.66029V13.1765H2.10512V7.66029H0V5.4236H2.10512V4.60982C2.10512 1.58858 3.36721 0 6.03759 0C6.85625 0 7.06091 0.13157 7.50922 0.238775V2.4511C7.00731 2.36338 6.86599 2.31465 6.34459 2.31465C5.72572 2.31465 5.39436 2.49008 5.09224 2.83606C4.79011 3.18204 4.63905 3.78141 4.63905 4.63905V5.42847H7.50922L6.7393 7.66516H4.63905V7.66029Z" fill="#FFFBF2" />
                            </svg>
                            </a>
                            <a href="" className='w-[32px] h-[32px] flex items-center justify-center border border-[#FFFBF2] rounded-[100px]'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.025 0H13.172L8.482 5.374L14 12.688H9.68L6.294 8.253L2.424 12.688H0.275L5.291 6.938L0 0.000999987H4.43L7.486 4.054L11.025 0ZM10.27 11.4H11.46L3.78 1.221H2.504L10.27 11.4Z" fill="white" />
                            </svg>
                            </a>
                            <a href="" className='w-[32px] h-[32px] flex items-center justify-center border border-[#FFFBF2] rounded-[100px]'><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.97595 4.33289H0.222656V13.113H2.97595V4.33289Z" fill="#FFFBF2" />
                                <path d="M10.4224 4.14265C10.3209 4.12997 10.2131 4.12362 10.1052 4.11728C8.56365 4.05384 7.69453 4.96737 7.39002 5.3607C7.30754 5.46855 7.26948 5.53199 7.26948 5.53199V4.35835H4.63672V13.1384H7.26948H7.39002C7.39002 12.2439 7.39002 11.3558 7.39002 10.4613C7.39002 9.97913 7.39002 9.49699 7.39002 9.01484C7.39002 8.41851 7.34561 7.78411 7.64377 7.23853C7.89753 6.78176 8.3543 6.55337 8.86816 6.55337C10.3907 6.55337 10.4224 7.93002 10.4224 8.0569C10.4224 8.06324 10.4224 8.06959 10.4224 8.06959V13.1765H13.1757V7.44788C13.1757 5.48758 12.1797 4.33297 10.4224 4.14265Z" fill="#FFFBF2" />
                                <path d="M1.59868 3.19737C2.48161 3.19737 3.19738 2.48162 3.19738 1.59869C3.19738 0.715757 2.48161 0 1.59868 0C0.715754 0 0 0.715757 0 1.59869C0 2.48162 0.715754 3.19737 1.59868 3.19737Z" fill="#FFFBF2" />
                            </svg>
</a>
                        </div>
                    </div>




                    <div className='flex flex-row gap-[157px] max-lg:gap-[80px] max-sm:flex-col'>
                        <div className='text-white text-nowrap'>
                            <h6 className='pb-[20px] font-medium text-[20px] leading-[100%] tracking-[0%]'>Quick Links</h6>
                            <div className='flex flex-col gap-[18px] font-normal text-[16px] leading-[100%] tracking-[0%]'>
                                <a href="#" className='flex flex-row items-center gap-[6.48px] text-white'>Leggings<span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6067 -1.14441e-05L11.785 1.17832L5.89333 7.07166L0 1.17832L1.17833 -1.14441e-05L5.8925 4.71415L10.6067 -1.14441e-05Z" fill="white" />
                                </svg>
                                </span></a>

                                <a href="#" className='flex flex-row items-center gap-[6.2px] text-white'>Women’s Clothing<span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6067 -1.14441e-05L11.785 1.17832L5.89333 7.07166L0 1.17832L1.17833 -1.14441e-05L5.8925 4.71415L10.6067 -1.14441e-05Z" fill="white" />
                                </svg>
                                </span></a>

                                <a href="#" className='flex flex-row items-center gap-[6.2px]'>Men’s Clothing<span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6067 -1.14441e-05L11.785 1.17832L5.89333 7.07166L0 1.17832L1.17833 -1.14441e-05L5.8925 4.71415L10.6067 -1.14441e-05Z" fill="white" />
                                </svg>
                                </span></a>

                                <a href="#" className='flex flex-row items-center gap-[7.2px]'>Yoga & Pilates Equipment<span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6067 -1.14441e-05L11.785 1.17832L5.89333 7.07166L0 1.17832L1.17833 -1.14441e-05L5.8925 4.71415L10.6067 -1.14441e-05Z" fill="white" />
                                </svg>
                                </span></a>

                                <a href="#" className='flex flex-row items-center gap-[7.2px]'>Jewelry & Wellness<span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6067 -1.14441e-05L11.785 1.17832L5.89333 7.07166L0 1.17832L1.17833 -1.14441e-05L5.8925 4.71415L10.6067 -1.14441e-05Z" fill="white" />
                                </svg>
                                </span></a>

                                <a href="#" className='flex flex-row items-center gap-[7.2px]'>Accessories<span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6067 -1.14441e-05L11.785 1.17832L5.89333 7.07166L0 1.17832L1.17833 -1.14441e-05L5.8925 4.71415L10.6067 -1.14441e-05Z" fill="white" />
                                </svg>
                                </span></a>

                                <a href="#" className=''>Size Guide</a>
                            </div>
                        </div>




                        <div className='text-white'>
                            <h6 className='pb-[20px] font-medium text-[20px] leading-[100%] tracking-[0%] '>Other links</h6>
                            <div className='flex flex-col gap-[18px] font-normal text-[16px] leading-[100%] tracking-[0%] text-nowrap'>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[87px] py-[21px] border-t border-t-[#878585] '>
                <p className='text-center text-[#FFFFFF]/80 font-normal text-[14px] leading-[100%] tracking-[0%]'>Copyright © 2025 Yogalis. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer