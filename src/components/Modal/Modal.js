import React from "react";

const Modal = (props) => {
  const { product, onAddProduct, closeModal } = props;

  const handleAddProduct = () => {
    onAddProduct(product);
    closeModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="modal-show flex shadow-card bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg w-full h-auto">
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className=" bg-white rounded-2xl">
          <div className="relative w-full">
            <button
              className="modal-bts absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 cursor-pointer shadow-xl"
              onClick={handleCloseModal}
            >
              <svg className="fill-current" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                ></path>
              </svg>
            </button>
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {product.name.length > 12
                  ? product.name.slice(0, 12) + "..."
                  : product.name}
              </h1>
              <div className="text-lg font-semibold text-slate-900">
                ${product.price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                In stock {product.quantity}
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xs"
                    defaultChecked
                  />
                  <div className="input-checked w-9 h-9 rounded-lg flex items-center justify-center peer-checked:font-semibold peer-checked:bg-green peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="s"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center peer-checked:font-semibold peer-checked:bg-green peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="m"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-green peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="l"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-green peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xl"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-green peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="bg-btn-card"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  BUY NOW
                </button>
                <button className="bg-btn-card " onClick={handleAddProduct}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
