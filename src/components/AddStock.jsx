"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const AddStock = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [onUpload, setOnUpload] = useState(
    "https://cdn1.iconfinder.com/data/icons/web-design-7/64/choose-image-picture-illustration-1024.png"
  );

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="w-[90%] flex flex-col">
        <button className="place-self-end" onClick={onClose}>
          <IoIosCloseCircle size={20} className="text-white" />
        </button>
        <div className=" bg-white rounded-xl p-4">
          <h3 className="text-lg font-bold mb-4">Tambah Stock</h3>
          <label htmlFor="nama" className="text-sm font-medium text-zinc-950">
            Nama
          </label>
          <input
            name="nama"
            type="text"
            placeholder="Iphone 13 pro max"
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <label htmlFor="status" className="text-sm font-medium text-zinc-950">
            Status
          </label>
          <input
            name="status"
            type="text"
            placeholder="IBOX or NEW or SECCOND"
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <label htmlFor="ram" className="text-sm font-medium text-zinc-950">
            RAM/Storage
          </label>
          <input
            name="ram"
            type="text"
            placeholder="8/256 or 12/512"
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <label htmlFor="price" className="text-sm font-medium text-zinc-950">
            Harga
          </label>
          <input
            name="price"
            type="number"
            placeholder="9000000"
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <label htmlFor="link" className="text-sm font-medium text-zinc-950">
            Link Instagram
          </label>
          <input
            name="link"
            type="text"
            placeholder="Instagram product link"
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <label htmlFor="image" className="text-sm font-medium text-zinc-950">
            Gambar
          </label>
          <div className="w-full flex items-center justify-center flex-col gap-2 rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 ">
            <img src={onUpload} alt="uploaded" className="max-w-24 max-h-24" />
            <CldUploadWidget
              signatureEndpoint="/api/sign-cloudinary-params"
              onSuccess={(result) => {
                setOnUpload(result.info.secure_url);
                console.log(result);
              }}
              uploadPreset="lytgadget"
              options={{
                sources: ["local"],
                multiple: false,
                resourceType1: "image",
                maxFileSize: 4000000,
              }}
            >
              {({ open }) => {
                return (
                  <button
                    className="btn btn-base-200 btn-sm text-sm rounded-md items-center"
                    onClick={() => open()}
                  >
                    <MdOutlineAddPhotoAlternate />
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddStock;
