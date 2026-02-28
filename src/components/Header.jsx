import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 

function Header() {

    const carouselArray = [
        {
            id: 1,
            title: "ELEVATE YOUR PRATICE",
            heading: "Nature - Inspired",
            desc: "Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
            bgImage: "/assets/images/png/header.png ",
        },
        {
            id: 2,
            title: "ELEVATE YOUR PRATICE",
            heading: "Nature - Inspired",
            desc: "Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
            bgImage: "/assets/images/png/header_1.png",
        },
        {
            id: 3,
            title: "ELEVATE YOUR PRATICE",
            heading: "Nature - Inspired",
            desc: "Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
            bgImage: "/assets/images/png/header_2.png",
        },
        {
            id: 4,
            title: "ELEVATE YOUR PRATICE",
            heading: "Nature - Inspired",
            desc: "Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
            bgImage: "/assets/images/png/header_3.png",
        },
    ];
    return (
        <Carousel
            className="  w-full  mx-auto relative"
            autoPlay
            showIndicators={false}
            infiniteLoop
            showThumbs={false}
            swipeable
            useKeyboardArrows={true}
        >
            {carouselArray.map((item, index) => (
                <div key={index} className="flex justify-center lg:justify-start">
                    <img
                        src={item.bgImage}
                        alt={index}
                        className="h-191.75 object-center object-cover "
                    />
                    <div></div>
                    <div className="absolute flex flex-col lg:items-start items-center lg:text-left h-full justify-center lg:top-10 text-white lg:ml-[190px] max-w-149.5 text-center ">
                        <h1 className="md:text-2xl text-xl font-normal tracking-wider  ">
                            {item.title}
                        </h1>
                        <h1 className="lg:text-[66px] md:text-[60px] sm:text-[55px] text-[48px] font-bold">{item.heading}</h1>
                        <h1 className="lg:text-xl md:text-[18px] text-base font-normal leading-[165%] ">{item.desc}</h1>

                        <button className="bg-[#01C6B5] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-medium mt-6 sm:mt-8 md:mt-10 hover:scale-102 duration-200 ease-in ">
                            Shop now
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default Header;







 





// <div className="bg-[url('./assets/images/png/header.png')] bg-no-repeat bg-cover  w-full min-h-screen relative">
//     <div className='max-w-[1140px] px-3 mx-auto w-full'>
//         <div className='flex flex-col gap-[16px] text-white pt-[230px] '>
//             <span className='font-normal text-[24px] leading-[100%] tracking-[18%] capitalize'>ELEVATE YOUR pRATICE</span>
//             <h2 className='font-bold text-[66px] leading-[100%] tracking-[0%] capitalize'>N<span className='lowercase'>ATURE</span>-I<span className='lowecase'>NSPIRED</span></h2>
//             <p className='max-w-[598px] font-normal text-[20px] leading-[165%] tracking-[0%] capitalize'>Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.</p>
//         </div>
//         <Button className="mt-[24px] px-[26px] py-[16px] text-[20px] font-medium "
//             text={"Shop now"}
//         />
//     </div>
// </div>