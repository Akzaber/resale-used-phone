import React from "react";

const BookNowModal = ({ productName }) => {
  const { name, price } = productName;
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96 p-4">
          <form className="grid grid-cols-1 w-full gap-4">
            <input
              type="name"
              placeholder="your name"
              className="input input-bordered w-full"
              name="name"
            />
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered w-full"
              name="email"
            />
            <input
              disabled
              type="text"
              defaultValue={name}
              className="input input-bordered w-full"
              name="itemName"
            />
            <input
              disabled
              type="number"
              defaultValue={price}
              className="input input-bordered w-full"
              name="price"
            />
            <input
              type="number"
              placeholder="your phone number"
              className="input input-bordered w-full"
              name="phone"
            />
            <input
              type="text"
              placeholder="enter your location"
              className="input input-bordered w-full"
              name="location"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
