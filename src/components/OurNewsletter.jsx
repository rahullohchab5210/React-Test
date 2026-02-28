import React from 'react'
import Button from './common/Btn'

function OurNewsletter() {
    return (
        <div className='mt-[140px]'> 
        <div className='bg-[#F1F1F1] '>
            <div className='max-w-[1440px] mx-auto px-3'>
                <div className='flex items-center flex-row max-lg:flex-col max-lg:gap-y-[30px]'>
                    <div className='ml-[34.32px]'>
                        <img src="/assets/images/png/OurNewsletter_1.png" alt="photo" />
                    </div>
                    <div className='max-w-[621px] items-center flex flex-col'>
                        <h3 className='font-semibold text-[48px] leading-[100%] tracking-[0%] text-center text-[#000000] text-center'> Subscribe To Our Newsletter</h3>
                        <p className='pt-[8px] pb-[20px] font-normal text-[20px] leading-[160%] tracking-[0%] text-[#414143]/80 text-center max-w-[541.85px]'>Get weekly updates on the newest design stories, case studies and tips right in your mailbox. </p>
                        <label className='flex items-center border border-[#414143]/10 py-[6px] pr-[6px] pl-[25px]'>
                            <input type="text" placeholder='Email Address' className='font-normal text-[16px] leading-[100%] tracking-[0%] text-[#000000]/70 w-full border-none focus:outline-none' />
                            <Button className="px-[26px] py-[16px] text-[20px] font-medium"
                                text={"Subscribe"}
                            />
                        </label>
                    </div>
                    <div>
                        <img src="/assets/images/png/OurNewsletter_2.png" alt="photo-2" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OurNewsletter