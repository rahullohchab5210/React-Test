import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Btn";
import Navbar from "../components/Navbar";

const Minus = ({ onClick }) => (
    <svg className="lg:h-12 lg:w-12 md:h-9.5 md:w-9.5 h-7 w-7"
        onClick={onClick}
        viewBox="0 0 48 44"
        fill="none">
        <rect width="48" height="44" fill="#414143" />
        <path d="M13.6934 23.4341V20.5659H34.3056V23.4341H13.6934Z" fill="white" />
    </svg>
);

const Plus = ({ onClick }) => (
    <svg className="lg:h-12 lg:w-12 md:h-9.5 md:w-9.5 h-7 w-7"
        onClick={onClick}
        viewBox="0 0 48 44"
        fill="none">
        <rect width="48" height="44" fill="#01C6B5" />
        <path d="M22.7067 30.9321V13.0681H25.2939V30.9321H22.7067ZM15.0684 23.264V20.7783H32.9323V23.264H15.0684Z" fill="white" />
    </svg>
);

const Trash = ({ onClick }) => (
    <svg onClick={onClick} width="33" height="33" viewBox="0 0 33 33" fill="none">
        <g opacity="0.5">
            <path d="M12.5968 25.0166C12.1089 25.0166 11.6914 24.843..."
                fill="#414143" />
        </g>
    </svg>
);

const Cart = () => {
    const localData = JSON.parse(localStorage.getItem("Products")) || [];

    // Add qty to each item
    const [filteredItem, setFilteredItem] = useState(
        localData.map((i) => ({ ...i, qty: 1 }))
    );

    // Delete item
    const handleTrash = (itemToDelete) => {
        const updated = filteredItem.filter((i) => i !== itemToDelete);
        setFilteredItem(updated);
        localStorage.setItem("Products", JSON.stringify(updated));
    };

    // Calculate total
    const totalPrice = filteredItem.reduce((acc, item) => {
        const price = Number(item.price.replace("€", ""));
        return acc + price * item.qty;
    }, 0);

    return (
        <div className="w-full flex justify-center flex-col gap-30 items-center">
            <Navbar />

            <div className="w-full max-w-360 flex flex-col gap-10 mb-20">

                <div className="flex md:justify-between items-center">
                    <div className="flex px-5 items-center w-full">
                        <h2 className="text-[48px] font-semibold">Your Cart</h2>
                    </div>

                    <Link to={"/"}>
                        <li className="list-none underline md:text-2xl text-xl font-medium px-5">
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
                                        <img className="h-25 w-25 object-cover"
                                            src={item.imageSrc} alt="" />

                                        <div className="flex flex-col gap-3">
                                            <span>{item.productName}</span>
                                            <span>{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Minus
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




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/common/Btn";
// import Navbar from "../components/Navbar";

// const Cart = () => {
//     const [items, setItems] = useState([]);

//     // Load items
//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("Products")) || [];
//         setItems(data);
//     }, []);

//     // Update when cartUpdated event triggers
//     useEffect(() => {
//         const updateCart = () => {
//             const data = JSON.parse(localStorage.getItem("Products")) || [];
//             setItems(data);
//         };
//         window.addEventListener("cartUpdated", updateCart);

//         return () => window.removeEventListener("cartUpdated", updateCart);
//     }, []);

//     // Update quantity
//     const updateQuantity = (index, type) => {
//         const updated = [...items];

//         if (type === "inc") updated[index].quantity++;
//         if (type === "dec" && updated[index].quantity > 1)
//             updated[index].quantity--;

//         setItems(updated);
//         localStorage.setItem("Products", JSON.stringify(updated));
//     };

//     // Delete
//     const handleDelete = (index) => {
//         const updated = items.filter((_, i) => i !== index);
//         setItems(updated);
//         localStorage.setItem("Products", JSON.stringify(updated));
//     };

//     // Total Price
//     const total = items.reduce(
//         (acc, item) => acc + Number(item.price.slice(1)) * item.quantity,
//         0
//     );

//     return (
//         <div className="w-full flex justify-center flex-col gap-30 items-center">
//             <Navbar />

//             <div className="w-full max-w-[1140px] flex flex-col gap-10 mb-20">
//                 <div className="flex justify-between items-center px-5">
//                     <h2 className="text-[48px] font-semibold">Your Cart</h2>
//                     <Link to={"/"}>
//                         <li className="list-none underline text-2xl font-medium">
//                             Continue Shopping
//                         </li>
//                     </Link>
//                 </div>

//                 {items.length > 0 ? (
//                     <>
//                         <div className="flex bg-gray-100 p-6 justify-between text-xl font-medium">
//                             <span>Product</span>
//                             <span>Quantity</span>
//                             <span>Total</span>
//                         </div>

//                         {items.map((item, index) => (
//                             <div key={index} className="flex justify-between items-center p-4">
//                                 <div className="flex gap-3 items-center">
//                                     <img
//                                         src={item.imageSrc}
//                                         className="h-24 w-24 object-cover"
//                                         alt=""
//                                     />
//                                     <div>
//                                         <h4>{item.productName}</h4>
//                                         <p>{item.price}</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-3">
//                                     <button
//                                         onClick={() => updateQuantity(index, "dec")}
//                                         className="px-3 py-1 bg-gray-300"
//                                     >
//                                         -
//                                     </button>

//                                     <span className="px-4">{item.quantity}</span>

//                                     <button
//                                         onClick={() => updateQuantity(index, "inc")}
//                                         className="px-3 py-1 bg-gray-300"
//                                     >
//                                         +
//                                     </button>

//                                     <button
//                                         onClick={() => handleDelete(index)}
//                                         className="text-red-500 font-bold text-xl"
//                                     >
//                                         🗑
//                                     </button>
//                                 </div>

//                                 <span className="text-xl font-medium">
//                                     {Number(item.price.slice(1)) * item.quantity}
//                                 </span>
//                             </div>
//                         ))}

//                         <div className="flex justify-end mt-5 px-5">
//                             <div className="text-right">
//                                 <h3 className="text-xl font-semibold">
//                                     Estimated Total: Dhs. {total} AED
//                                 </h3>
//                                 <Button
//                                     text={"Checkout"}
//                                     padding={"py-3 bg-[rgba(1,198,181,1)] text-white mt-3"}
//                                 />
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     <p className="text-xl font-normal text-[#414143] px-10">
//                         Your Cart is Empty
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;









// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/common/Btn";
// import Navbar from "../components/Navbar";

// const Minus = ({ onClick }) => {
//     return (
//         <svg
//             className="lg:h-12 lg:w-12 md:h-9.5 md:w-9.5 h-7 :w-27"
//             onClick={onClick}
//             viewBox="0 0 48 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <rect width="48" height="44" fill="#414143" />
//             <path
//                 d="M13.6934 23.4341V20.5659H34.3056V23.4341H13.6934Z"
//                 fill="white"
//             />
//         </svg>
//     );
// };

// const Plus = ({ onClick }) => {
//     return (
//         <svg
//             className="lg:h-12 lg:w-12 md:h-9.5 md:w-9.5 h-7 w-7"
//             onClick={onClick}
//             viewBox="0 0 48 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <rect width="48" height="44" fill="#01C6B5" />
//             <path
//                 d="M22.7067 30.9321V13.0681H25.2939V30.9321H22.7067ZM15.0684 23.264V20.7783H32.9323V23.264H15.0684Z"
//                 fill="white"
//             />
//         </svg>
//     );
// };

// const Trash = ({ onClick }) => {
//     return (
//         <svg
//             onClick={onClick}
//             width="33"
//             height="33"
//             viewBox="0 0 33 33"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <g opacity="0.5">
//                 <path
//                     d="M12.5968 25.0166C12.1089 25.0166 11.6914 24.843 11.3443 24.4958C10.9971 24.1487 10.8232 23.7309 10.8226 23.2424V11.7101C10.5713 11.7101 10.3608 11.625 10.191 11.4546C10.0213 11.2843 9.93614 11.0738 9.93555 10.823C9.93496 10.5723 10.0201 10.3617 10.191 10.1914C10.3619 10.0211 10.5725 9.93592 10.8226 9.93592H14.371C14.371 9.68458 14.4562 9.47404 14.6265 9.30431C14.7968 9.13458 15.0074 9.04942 15.2581 9.04883H18.8065C19.0579 9.04883 19.2687 9.13399 19.439 9.30431C19.6093 9.47463 19.6942 9.68517 19.6936 9.93592H23.242C23.4933 9.93592 23.7042 10.0211 23.8745 10.1914C24.0448 10.3617 24.1297 10.5723 24.1291 10.823C24.1285 11.0738 24.0433 11.2846 23.8736 11.4555C23.7039 11.6264 23.4933 11.7113 23.242 11.7101V23.2424C23.242 23.7303 23.0684 24.1481 22.7213 24.4958C22.3741 24.8436 21.9563 25.0172 21.4678 25.0166H12.5968ZM21.4678 11.7101H12.5968V23.2424H21.4678V11.7101Z"
//                     fill="#414143"
//                 />
//             </g>
//         </svg>
//     );
// };

// const Cart = () => {
//     const [value, setValue] = useState(1);
//     const [filteredItem, setFilteredItem] = useState([]);

//     // ⬅ Load data from localStorage on first render
//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("Products")) || [];
//         setFilteredItem(data);
//     }, []);

//     // ⬅ Automatically update cart when localStorage changes
//     useEffect(() => {
//         const listener = () => {
//             const data = JSON.parse(localStorage.getItem("Products")) || [];
//             setFilteredItem(data);
//         };

//         window.addEventListener("storage", listener);
//         return () => window.removeEventListener("storage", listener);
//     }, []);

//     // DELETE ITEM
//     const handleTrash = (value) => {
//         let f = filteredItem.filter((item) => value !== item);
//         setFilteredItem(f);
//         localStorage.setItem("Products", JSON.stringify(f));
//     };

//     // TOTAL PRICE CALCULATION
//     let totalPrice = 0;
//     filteredItem.map((item) => {
//         totalPrice += Number(item.price.slice(1));
//     });

//     useEffect(() => {
//         const updateCart = () => {
//             const data = JSON.parse(localStorage.getItem("Products")) || [];
//             setFilteredItem(data);
//         };

//         window.addEventListener("cartUpdated", updateCart);

//         return () => window.removeEventListener("cartUpdated", updateCart);
//     }, []);

//     return (
//         <div className="w-full flex justify-center flex-col gap-30 items-center">
//             <Navbar />
//             <div className="w-full max-w-[1140] flex flex-col gap-10 mb-20">
//                 <div className="flex md:justify-between  items-center">
//                     <div
//                         className={`flex px-5 items-center md:text-left text-center md:justify-between justify-center w-full`}
//                     >
//                         <div className="flex flex-col gap-2">
//                             <h2 className="text-[48px] font-semibold">
//                                 Your Cart
//                             </h2>
//                         </div>
//                     </div>
//                     <Link to={"/"}>
//                         <li className="md:whitespace-nowrap list-none underline decoration-1 md:text-2xl text-xl font-medium md:mr-0 mr-10 px-5">
//                             Continue Shopping
//                         </li>
//                     </Link>
//                 </div>

//                 {filteredItem.length > 0 ? (
//                     <div className="flex flex-col w-full max-w-360">
//                         <div className="flex bg-[rgba(244,244,244)] p-6 justify-between text-xl font-medium">
//                             <span>Product</span>
//                             <span>Quantity</span>
//                             <span>Total</span>
//                         </div>

//                         <div className="flex flex-col md:p-6 p-2 md:gap-6 gap-4">
//                             {filteredItem?.map((item, index) => (
//                                 <div key={index} className="flex justify-between items-center">
//                                     <div className="flex gap-3 items-center md:flex-row flex-col text-center">
//                                         <img
//                                             className="h-25 w-25 object-cover"
//                                             src={item.imageSrc}
//                                             alt=""
//                                         />
//                                         <div className="flex flex-col gap-3 text-base font-normal">
//                                             <span className="w-30">{item.productName}</span>
//                                             <span>{item.price}</span>
//                                         </div>
//                                     </div>

//                                     <div className="flex gap-2 items-center">
//                                         <div className="flex items-center">
//                                             <Minus onClick={() => value !== 0 && setValue(value - 1)} />
//                                             <span className="md:px-5 p-3 md:py-3 md:text-xl text-base font-normal border border-[#4141431A]">
//                                                 {value}
//                                             </span>
//                                             <Plus onClick={() => setValue(value + 1)} />
//                                         </div>
//                                         <Trash onClick={() => handleTrash(item)} />
//                                     </div>

//                                     <span className="md:text-xl text-base font-medium">
//                                         {Number(item.price.slice(1)) * value}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="flex justify-end mt-5 w-full">
//                             <div className="flex flex-col gap-4 max-w-82 w-full">
//                                 <div className="flex justify-between text-lg font-semibold">
//                                     <span>Estimated total </span>
//                                     <span>Dhs. {totalPrice * value} AED </span>
//                                 </div>
//                                 <p className="text-base font-normal tracking-wide text-[#414143]">
//                                     Taxes, discounts and shipping calculated at checkout.
//                                 </p>
//                                 <Button
//                                     text={"Checkout"}
//                                     padding={"py-3 bg-[rgba(1,198,181,1)] text-white"}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <p className="text-xl font-normal text-[#414143] px-10">
//                         Your Cart is Empty
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;









 