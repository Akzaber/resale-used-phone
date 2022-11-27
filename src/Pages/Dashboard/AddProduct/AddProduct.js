import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          data.image = imgData.data.url;
          const product = data;
          console.log(product);

          fetch("http://localhost:5000/addproducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged === true) {
                reset();
                toast.success("Product Added Successfully");
                navigate("/dashboard/myproducts");
              }
            });
        }
      });
  };
  return (
    <div className="border rounded shadow-xl w-96 p-4">
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="grid grid-cols-1 gap-4"
      >
        <select
          {...register("categoryName")}
          name="categoryName"
          className="select select-bordered w-full"
        >
          <option selected>oneplus</option>
          <option>samsung</option>
          <option>iphone</option>
        </select>
        <input
          type="file"
          name="image"
          className="file-input file-input-bordered w-full"
          {...register("image")}
        />
        <input
          type="text"
          name="sellerName"
          defaultValue={user?.displayName}
          className="input input-bordered w-full"
          {...register("sellerName")}
        />
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          className="input input-bordered w-full"
          {...register("email")}
        />
        <input
          type="text"
          name="productName"
          placeholder="product name"
          className="input input-bordered w-full"
          {...register("productName", { required: "Product Name is required" })}
        />
        <input
          type="number"
          name="resalePrice"
          placeholder="resale price"
          className="input input-bordered w-full"
          {...register("resalePrice", {
            required: "product resale price is required",
          })}
        />
        <input
          type="number"
          name="originalPrice"
          placeholder="original price"
          className="input input-bordered w-full"
          {...register("originalPrice", {
            required: "product orginal price is required",
          })}
        />
        <select
          {...register("productCondition")}
          name="productCondition"
          className="select select-bordered w-full"
        >
          <option selected>excellent</option>
          <option>good</option>
          <option>fair</option>
        </select>
        <input
          type="number"
          name="mobileNumber"
          placeholder="Enter your mobile number"
          className="input input-bordered w-full"
          {...register("mobileNumber", {
            required: "Mobile number is required",
          })}
        />
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          className="input input-bordered w-full"
          {...register("location", { required: "location is required" })}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          className="input input-bordered w-full"
          {...register("description", { required: "description is required" })}
        />
        <input
          type="number"
          name="yearOfUse"
          placeholder="Enter uses year"
          className="input input-bordered w-full"
          {...register("yearOfUse", {
            required: "uses year is required",
          })}
        />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;
