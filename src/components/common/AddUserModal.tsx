import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";

type Props = { open: boolean; onClose: () => void };

const AddUserModal = (props: Props) => {
  const { open, onClose } = props;
  const [userData, setUserData] = useState({
    age: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(userData);
  };

  if (!open) return null;
  return (
    <>
      <div className="modal_overlay " />
      <div className="modal_style w-[45%] px-4 py-8 rounded-md">
        <div className="flex items-center justify-between pb-12">
          <div>
            <p className=" text-2xl font-semibold">Edit</p>
          </div>
          <button onClick={onClose}>
            <CgCloseO className="text-white! text-2xl" />
          </button>
        </div>

        <form
          className="flex flex-col gap-y-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex gap-x-2 items-center justify-around">
            <div className="flex flex-col items-start justify-start gap-x-2">
              {" "}
              <div className="text-lg font-medium">First Name</div>
              <input
                type="text"
                name="firstname"
                value={userData?.firstName}
                placeholder="Enter your first name"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    firstName: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-x-2">
              {" "}
              <div className="text-lg font-medium">Last Name</div>
              <input
                type="text"
                name="lastname"
                value={userData?.lastName}
                placeholder="Enter your last name"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    lastName: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-x-8 items-center justify-around">
            <div className="flex flex-col items-start justify-start gap-x-2">
              {" "}
              <div className="text-lg font-medium">Email</div>
              <input
                type="email"
                name="email"
                value={userData?.email}
                placeholder="Enter your email"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-x-2">
              {" "}
              <div className="text-lg font-medium">Phone</div>
              <input
                type="tel"
                name="phoneNumber"
                value={userData?.phoneNumber}
                placeholder="Enter your phone no"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    phoneNumber: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>

          <div className="flex flex-col items-start ml-20 gap-x-2 ">
            {" "}
            <div className="text-lg font-medium">Age</div>
            <input
              type="text"
              name="age"
              value={userData?.age}
              placeholder="Enter your age"
              className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  age: e.currentTarget.value,
                })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-[#FFEE58]  mt-4 py-2 w-24 mx-auto rounded-lg text-black font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUserModal;
