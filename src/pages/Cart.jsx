import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Btn";
import Navbar from "../components/Navbar";

const Minus = ({ onClick }) => (
    <svg className="lg:h-12 lg:w-12 md:h-9.5 md:w-9.5 h-7 w-7 cursor-pointer"
        onClick={onClick}
        viewBox="0 0 48 44"
        fill="none">
        <rect width="48" height="44" fill="#414143" />
        <path d="M13.6934 23.4341V20.5659H34.3056V23.4341H13.6934Z" fill="white" />
    </svg>
);

const Plus = ({ onClick }) => (
    <svg className="lg:h-12 lg:w-12 md:h-9.5 md:w-9.5 h-7 w-7 cursor-pointer"
        onClick={onClick}
        viewBox="0 0 48 44"
        fill="none">
        <rect width="48" height="44" fill="#01C6B5" />
        <path d="M22.7067 30.9321V13.0681H25.2939V30.9321H22.7067ZM15.0684 23.264V20.7783H32.9323V23.264H15.0684Z" fill="white" />
    </svg>
);

const Trash = ({ onClick }) => (
    <svg className="cursor-pointer" onClick={onClick} width="15" height="16" viewBox="0 0 15 16" fill="none">
        <path d="M2.66129 15.9677C2.17339 15.9677 1.75586 15.7942 1.40871 15.447C1.06156 15.0999 0.887691 14.682 0.8871 14.1935V2.66129C0.635756 2.66129 0.425218 2.57613 0.255487 2.40581C0.0857558 2.23548 0.000594457 2.02495 3.05895e-06 1.77419C-0.000588339 1.52344 0.0845731 1.3129 0.255487 1.14258C0.426401 0.972258 0.636939 0.887097 0.8871 0.887097H4.43549C4.43549 0.635753 4.52065 0.425215 4.69097 0.255484C4.86129 0.0857528 5.07183 0.000591398 5.32258 0H8.87097C9.12232 0 9.33315 0.0851614 9.50347 0.255484C9.67379 0.425807 9.75866 0.636344 9.75807 0.887097H13.3065C13.5578 0.887097 13.7686 0.972258 13.939 1.14258C14.1093 1.3129 14.1941 1.52344 14.1936 1.77419C14.193 2.02495 14.1078 2.23578 13.9381 2.40669C13.7683 2.57761 13.5578 2.66247 13.3065 2.66129V14.1935C13.3065 14.6815 13.1329 15.0993 12.7857 15.447C12.4386 15.7948 12.0208 15.9683 11.5323 15.9677H2.66129Z" fill="#414143" />
    </svg>
);

const Cart = () => {

     
    const localData = JSON.parse(localStorage.getItem("Products")) || [];

    const [filteredItem, setFilteredItem] = useState(
        localData.map((i) => ({ ...i, qty: 1 }))
    );

    const getPrice = (price) => {
        if (!price) return 0;

        if (typeof price === "number") return price;

        return Number(String(price).replace("€", "").trim());
    };

  
    const handleTrash = (itemToDelete) => {
        const updated = filteredItem.filter((i) => i !== itemToDelete);
        setFilteredItem(updated);
        localStorage.setItem("Products", JSON.stringify(updated));
    };
 
    const totalPrice = filteredItem.reduce((acc, item) => {
        return acc + getPrice(item.price) * item.qty;
    }, 0);
 
    window.dispatchEvent(new Event("cartUpdated"));

    return (
        <div className="w-full flex justify-center flex-col gap-30 items-center">
            <Navbar />

            <div className="w-full max-w-285 flex flex-col gap-10 mb-20">

                <div className="flex md:justify-between items-center">
                    <div className="flex px-5 items-center w-full">
                        <h2 className="text-[48px] font-semibold">Your Cart</h2>
                    </div>

                    <Link to={"/"}>
                        <li className="list-none underline md:text-2xl text-xl font-medium px-5 ">
                            Continue Shopping
                        </li>
                    </Link>
                </div>

                {filteredItem.length > 0 ? (
                    <div className="flex flex-col w-full max-w-360">
                        <div className="flex bg-[rgba(244,244,244)] p-6 justify-between text-xl font-medium">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        <div className="flex flex-col p-6 gap-6">
                            {filteredItem.map((item, index) => (
                                <div key={index} className="flex justify-between items-center">

                                    <div className="flex gap-3 items-center">

                                        <img className=" w-24 h-24 object-contain"
                                            src={item.imageSrc} alt="imager" />


                                        <div className="flex flex-col gap-3">
                                            <span>{item.productName}</span>
                                            <span>{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Minus className="cursor-pointer"
                                            onClick={() => {
                                                if (item.qty > 1) {
                                                    setFilteredItem(
                                                        filteredItem.map((p) =>
                                                            p === item
                                                                ? { ...p, qty: p.qty - 1 }
                                                                : p
                                                        )
                                                    );
                                                }
                                            }}
                                        />

                                        <span className="px-5 py-3 text-xl font-normal border">
                                            {item.qty}
                                        </span>

                                        <Plus
                                            onClick={() =>
                                                setFilteredItem(
                                                    filteredItem.map((p) =>
                                                        p === item
                                                            ? { ...p, qty: p.qty + 1 }
                                                            : p
                                                    )
                                                )
                                            }
                                        />

                                        <Trash onClick={() => handleTrash(item)} />
                                    </div>

                                    <span className="text-xl font-medium">
                                        €{(Number(item.price.replace("€", "")) * item.qty).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end mt-5 w-full">
                            <div className="flex flex-col gap-4 max-w-82 w-full">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Estimated total</span>
                                    <span>€{totalPrice.toFixed(2)}</span>
                                </div>

                                <p className="text-base font-normal text-[#414143]">
                                    Taxes, discounts and shipping calculated at checkout.
                                </p>

                                <Button
                                    text={"Checkout"}
                                    padding={"py-3 bg-[rgba(1,198,181,1)] text-white"}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-xl text-[#414143] px-10">Your Cart is Empty</p>
                )}
            </div>
        </div>
    );
};

export default Cart;


