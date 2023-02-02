import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import DeleteUser from "../../api/deleteUser";

type Props = {
  open: boolean;
  onClose: () => void;
  id: string | number;
};

const DeleteModal = (props: Props) => {
  const { open, onClose, id } = props;
  const deleteFeild = async () => {
    const res = await DeleteUser(id);
    if (!res) {
      return null;
    }
    if (res) {
      onClose();
    }
  };

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

          <div className="flex items-center gap-x-12 w-full mt-6">
            <button
              className="bg-[#FFEE58] py-2 w-24 rounded-lg text-black font-semibold"
              onClick={() => {
                deleteFeild();
              }}
            >
              Yes
            </button>
            <button
              className="bg-[#FFEE58] py-2 w-24 rounded-lg text-black font-semibold"
              onClick={() => {
                onClose();
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
