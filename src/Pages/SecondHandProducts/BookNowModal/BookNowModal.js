import React from "react";
// import { useForm } from "react-hook-form";

const BookNowModal = ({ productName }) => {
  const { name, price } = productName;
  // const { register, handleSubmit } = useForm();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const userName = form.userName.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const productPrice = form.productPrice.value;
    const phone = form.phone.value;
    const location = form.location.value;

    console.log(userName, email, itemName, productPrice, phone, location);
    form.reset();
  };

  return (
    <>
      {/* Put this part before </body> tag */}
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
              // {...register("userName")}
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
              name="userName"
            />
            <input
              // {...register("email")}
              type="email"
              placeholder="your email"
              className="input input-bordered w-full"
              name="email"
            />
            <input
              // {...register("itemName")}
              type="text"
              defaultValue={name}
              className="input input-bordered w-full"
              name="itemName"
            />
            <input
              // {...register("productPrice")}
              type="number"
              defaultValue={price}
              className="input input-bordered w-full"
              name="productPrice"
            />
            <input
              // {...register("phone")}
              type="number"
              placeholder="your phone number"
              className="input input-bordered w-full"
              name="phone"
            />
            <input
              // {...register("location")}
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
