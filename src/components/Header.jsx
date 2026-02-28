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
            className=" w-full max-w-[1440px] mx-auto relative"
            autoPlay
            showArrows={false}
            showStatus={false}
            show
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
                        className="h-191.75 object-center object-cover w-full  "
                    />
                     
                    <div className="absolute flex flex-col lg:items-start items-center lg:text-left h-full justify-center lg:top-10 text-white lg:ml-[150px] max-w-149.5 text-center ">
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








 