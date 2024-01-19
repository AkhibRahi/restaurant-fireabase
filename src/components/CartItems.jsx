import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

function CartItems({ item }) {
  const [qty, setQty] = useState(1);
  return (
    <div
      className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
    >
      <img
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        src={item?.imageURL}
      />

      {/* name section */}

      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          ${parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}

      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus className="text-gray-50" />
        </motion.div>

        <p className="w-5 h-5 bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <motion.div whileTap={{ scale: 0.75 }}>
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
}

export default CartItems;
