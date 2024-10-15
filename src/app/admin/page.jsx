"use client";
import AddStock from "@/components/AddStock";
import Link from "next/link";
import { useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillFolderAdd, AiFillEdit, AiFillSetting } from "react-icons/ai";

const Admin = () => {
  const [showAddStock, setShowAddStock] = useState(false);
  const { signOut, openUserProfile } = useClerk();

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/lytgadget/image/upload/v1729017373/lytgadget/c2gwr5cqjojrhqch8gue.webp"
          alt="LYT GADGET"
          className="mx-auto size-20 text-zinc-950 "
        />
        <h1 className="text-xl font-bold mb-4 mt-2">LYTGADGET.ID</h1>
        <div className="flex gap-4 items-center justify-center flex-col w-1/2 ">
          <button
            className="btn btn-primary w-full"
            onClick={() => setShowAddStock(true)}
          >
            <AiFillFolderAdd /> Tambah Stock
          </button>
          <button className="btn btn-primary w-full">
            <AiFillEdit />
            Edit Stock
          </button>
          <button
            className="btn btn-primary w-full"
            onClick={() => openUserProfile()}
          >
            <AiFillSetting />
            Manage Account
          </button>
          <button
            className="btn btn-secondary w-full"
            onClick={() => signOut({ redirectUrl: "/admin" })}
          >
            <IoLogOutOutline />
            Sign out
          </button>
          <Link href="/" className="link link-primary">
            Homepage
          </Link>
        </div>
      </div>

      <AddStock
        isVisible={showAddStock}
        onClose={() => setShowAddStock(false)}
      />
    </>
  );
};
export default Admin;
