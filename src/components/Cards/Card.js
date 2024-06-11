import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Card = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { image, price } = product;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="shadow-card bg-white rounded-lg overflow-hidden shadow-lg w-full h-auto">
      <div className="relative pt-[10px] pr-[10px] pl-[10px]">
        <img
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={image}
          alt=""
        />
      </div>
      <div className="p-[10px] flex flex-col items-center md:flex-row md:justify-between">
        <span className="bg-price-card text-lg md:mb-0">${price}</span>
        <button className="bg-btn-card" onClick={openModal}>
          BUY NOW
        </button>
      </div>
      {modalOpen && <Modal product={product} closeModal={closeModal} />}
    </div>
  );
};

export default Card;
