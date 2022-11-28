import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookNowModal = ({ productName }) => {
  const { user } = useContext(AuthContext);
  const { name, price } = productName;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const userName = form.userName.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const productPrice = form.productPrice.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      userName,
      email,
      itemName,
      productPrice,
      phone,
      location,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Item Booked Successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96 p-4 relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 w-full mt-10 gap-4"
          >
            <input
              type="name"
              defaultValue={user?.displayName}
              placeholder="your name"
              className="input input-bordered w-full"
              name="userName"
            />
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="your email"
              className="input input-bordered w-full"
              name="email"
            />
            <input
              type="text"
              defaultValue={name}
              className="input input-bordered w-full"
              name="itemName"
            />
            <input
              type="number"
              defaultValue={price}
              className="input input-bordered w-full"
              name="productPrice"
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
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
