import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";

function CartContainer() {
  return (
    <div className="fixed top-0 right-0 z-[101] flex flex-col w-full md:w-375 h-screen bg-white drop-shadow-md">
      <div className="flex p-4 items-center justify-between cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>

        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-200 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
        >
          clear <RiRefreshFill />
        </motion.p>
      </div>

      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        {/* cart Items section */}

        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* cart Item */}
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-9591b.appspot.com/o/Image%2F1701314340864-f2.png?alt=media&token=ae48df29-3804-4076-8626-7adece4782c0"
            />

            {/* name section */}

            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Chocolate Vanilla</p>
              <p className="text-sm block text-gray-300 font-semibold">$8.5</p>
            </div>

            {/* button section */}

            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>

              <p className="w-5 h-5 bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>

              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* cart total section */}

        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg"> Sub Total</p>
            <p className="text-gray-400 text-lg"> $ 8.5 </p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg"> Delivery</p>
            <p className="text-gray-400 text-lg"> $ 2.5 </p>
          </div>

          <div className="w-full border-b border-gray-600 my-2">

            <div className="w-full flex items-center justify-center">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">$11.5</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
