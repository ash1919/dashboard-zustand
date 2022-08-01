import React from "react";
import { CgCloseO } from "react-icons/cg";

type Props = {
  open: boolean;
  onClose: () => void;
};

const DeleteModal = (props: Props) => {
  const { open, onClose } = props;
  if (!open) return null;
  return (
    <>
      <div className="modal_overlay " />
      <div className="text-white modal_style w-[25%] px-4 py-8 rounded-md">
        <div className="flex items-center justify-between pb-12">
          <div>
            <p className=" text-2xl font-semibold">Delete</p>
          </div>
          <button onClick={onClose}>
            <CgCloseO className="text-white! text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl">Are you sure you want to delete?</p>
          <div className="mt-2">
            <p className="pl-0.5 text-lg font-medium">To confirm enter your email</p>
            <input
              type="email"
              className="px-20 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
            />
          </div>
          <div className="flex items-center gap-x-12 w-full mt-6">
            <button className="bg-[#FFEE58] py-2 w-24 rounded-lg text-black font-semibold">
              Yes
            </button>
            <button className="bg-[#FFEE58] py-2 w-24 rounded-lg text-black font-semibold">
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
